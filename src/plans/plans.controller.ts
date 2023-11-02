import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansDto } from './dto/plans.dto/plans.dto';

@Controller('plans')
export class PlansController {
    constructor(private readonly PlansService:PlansService){}

    @Post()
    async createPlan(@Body() body:PlansDto){
    return await this.PlansService.createPlan(body)
    }

    @Get(':id')
    async searchPlanId(@Param('id') id:any){
        return await this.PlansService.searchPlanId(id)
    }

    @Get('users/:userID')
    async searchPlanUser(@Param('userID') userID:any){
        return await this.PlansService.searchPlanUser(userID)
    }

    @Delete(':id')
    async deletePlanId(@Param('id') id:any){
        return await this.PlansService.deletePlanId(id)
    }

    @Put(':id')
    async updatePlanId(@Param('id') id:any, @Body() bodyDescription:any){
        return await this.PlansService.updatePlanId(id, bodyDescription.description)
    }

}
