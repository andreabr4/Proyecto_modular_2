import { IsString } from "class-validator";

export class UsersDto {

    @IsString({message:'Name is not a string'})
    name:string

    @IsString({message: 'Surname is not a string'})
    surname:string

    @IsString({message:'Email is not a string'})
    email:string

    @IsString({message:'Password is not a string'})
    password:string
}
