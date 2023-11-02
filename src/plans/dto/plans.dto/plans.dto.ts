import { IsString } from "class-validator"

export class PlansDto {
   
    @IsString({message:'Name is not a string'})
    name:string

    @IsString({message: 'Description is not a string'})
    description:string

    @IsString({message:'UserID is not a string'})
    userID :string
}
