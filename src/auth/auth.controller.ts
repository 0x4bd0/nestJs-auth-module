import { Body, Controller, Post, UsePipes, ValidationPipe, UseGuards, Get, Request } from '@nestjs/common';
import { LoginDto } from 'src/dtos/auth.dto';
import { RegisterDto } from 'src/dtos/register.dto';
import { userDto } from 'src/dtos/user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService){}

    @Post('/register')
    async register(@Body(ValidationPipe) data : RegisterDto) : Promise<userDto>{
        return await this.authService.register(data)
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Body(ValidationPipe) creds : LoginDto){
        return this.authService.login(creds)
    }

    @UseGuards(JwtAuthGuard)
    @Get('jwtTest')
    test(@Request() req) : string{
        return 'Welcome ' + req.user.username
    }
    
}