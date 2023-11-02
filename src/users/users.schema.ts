import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User{
    @Prop({required:true, unique:true})
    userID:string; 

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    surname:string;

    @Prop({required:true, unique:true})
    email:string;

    @Prop({required:true})
    password:string;
}

export const UserSchema=SchemaFactory.createForClass(User)