import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/dtos/register.dto';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private userModel : Model<User>){}

    async findOne(email: string): Promise<User | undefined> {
        return await this.userModel.findOne({email : email})
      }


    async insertUser(data : RegisterDto) : Promise<User>{
       let tmp = new this.userModel(data)
       return await tmp.save()
    }

}
