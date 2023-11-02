import { Injectable } from '@nestjs/common';
import { Plan, PlanDocument } from './plans.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlansDto } from './dto/plans.dto/plans.dto';
import {uuid} from 'uuidv4'; 

@Injectable()
export class PlansService {
    constructor (@InjectModel (Plan.name) private planModel:Model<PlanDocument>){}
    
async createPlan(plan:PlansDto){
    let newPlan=new Plan()
    newPlan.planID=uuid()
    newPlan.name=plan.name
    newPlan.description=plan.description
    newPlan.userID=plan.userID

    return await this.planModel.create(newPlan)
}

async searchPlanId(id:string){
    return await this.planModel.findOne({
    planID:id
    })
}

async searchPlanUser(userID:string){
    return await this.planModel.find({
    userID:userID
    })
}

async deletePlanId(id:string){
    return await this.planModel.deleteOne({
    planID:id
    })
}

async updatePlanId(id:string, bodyDescription:any){
    return await this.planModel.updateOne(
        {
            planID:id
        }, 
        {
            description:bodyDescription
        }
    )
}
}
