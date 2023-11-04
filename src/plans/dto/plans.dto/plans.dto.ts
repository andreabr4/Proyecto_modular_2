import { IsNotEmpty, IsString } from "class-validator"

export class PlansDto {
   
    @IsString({message:'Name is not a string'})
    @IsNotEmpty({message:'Name is empty'})
    name:string

    @IsString({message: 'Description is not a string'})
    @IsNotEmpty({message:'Description is empty'})
    description:string

    @IsString({message:'UserID is not a string'})
    @IsNotEmpty({message:'UserID is empty'})
    userID :string
}
