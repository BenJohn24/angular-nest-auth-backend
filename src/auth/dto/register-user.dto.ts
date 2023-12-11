import { IsEmail, IsString, MinLength } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class RegisterUserDto  {
    
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @MinLength(6)
    password: string;
    
}