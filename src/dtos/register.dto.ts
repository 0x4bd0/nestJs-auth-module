import { IsEmail, IsString, MinLength } from 'class-validator'

export class RegisterDto {
    
    @IsString()
    @MinLength(3)
    username : string

    @IsEmail()
    email : string

    @IsString()
    password : string

}