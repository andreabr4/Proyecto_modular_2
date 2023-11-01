import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDocument } from './Users.schema';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService:UserService){}
  
    @Post('register')
    async createUser(@Body() body:any){
    return await this.UserService.createUser(body)
    }

    @Post('login')
    async searchPlanUser(@Body()body:any){
        return await this.UserService.searchUser(body)
    }


}
