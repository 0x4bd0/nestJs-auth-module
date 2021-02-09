import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { userDto } from 'src/dtos/user.dto';
import { RegisterDto } from 'src/dtos/register.dto';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './constants';
import { LoginDto } from 'src/dtos/auth.dto';

@Injectable()
export class AuthService {
    
    constructor(private usersService : UsersService,
                private jwtService: JwtService){}


      async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);

        if (user && await bcrypt.compare(pass, user.password)) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }


      async getUserInfo(email: string): Promise<userDto> {
        const tmp = await this.usersService.findOne(email)
        const user = {
          username : tmp.username,
          email : tmp.email,
          image : tmp.image,
          bio : tmp.bio
        }
        return user
      }
      

      async login(user: LoginDto) {
        const payload = { email: user.email };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }

    async register (data : RegisterDto) : Promise<userDto>{

         const tmp = await this.usersService.findOne(data.email)
         if(!tmp){

           const hashedPassword = await bcrypt.hash(data.password, jwtConstants.salt)
           data.password = hashedPassword
           let user = await this.usersService.insertUser(data)

          return {
            email : user.email,
            username : user.username,
            image : user.image,
            bio : user.bio
          }
          
         }

         throw new BadRequestException('Email allready exists')
       
    }
}
