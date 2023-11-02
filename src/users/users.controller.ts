import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDocument } from './Users.schema';
import { UserService } from './users.service';
import { UsersDto } from './dto/users.dto/users.dto';
import { UserLoginDto } from './dto/users-login.dto/users-login.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService:UserService){}
  
    @Post('register')
    async createUser(@Body() body:UsersDto){
    return await this.UserService.createUser(body)
    }

    @Post('login')
    async searchPlanUser(@Body()body:UserLoginDto){
        return  await this.UserService.searchUser(body)
    }


}
