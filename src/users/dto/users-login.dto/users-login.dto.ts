import { IsString } from "class-validator";

export class UserLoginDto {

    @IsString({message:'Email is not a string'})
    email:string

    @IsString({message:'Password is not a string'})
    password:string
}
