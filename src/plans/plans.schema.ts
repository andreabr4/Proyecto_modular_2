import { Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'
import { Prop } from "@nestjs/mongoose";

export type PlanDocument = Plan & Document

@Schema()
export class Plan{
    @Prop({required:true, unique:true})
    planID:string; 

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    description:string;

    @Prop({required:true})
    userID:string;

    @Prop({required:true})
    opinion:number;
}

export const PlanSchema=SchemaFactory.createForClass(Plan)