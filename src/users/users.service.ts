import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './Users.schema';
import { Model } from 'mongoose';
import { UsersDto } from './dto/users.dto/users.dto';
import {uuid} from 'uuidv4';
import * as bcrypt from "bcrypt";
import { UserLoginDto } from './dto/users-login.dto/users-login.dto';

@Injectable()
export class UserService {
        constructor (@InjectModel(User.name) private userModel:Model<UserDocument>){}

        async createUser(user:UsersDto){
            const saltOrRounds=10; 
           
            let newUser=new User()
            newUser.userID=uuid()
            newUser.name=user.name
            newUser.surname=user.surname
            newUser.email=user.email
            newUser.password= await bcrypt.hash(user.password,saltOrRounds)
            
        
            return await this.userModel.create(newUser)
        }

       async  searchUser(body:UserLoginDto){
            const user=await this.userModel.findOne({email:body.email})
        if(!user){
        return {message: "User or password not found"}
        }
        const passwordMatch= await bcrypt.compare(body.password,user.password)
        if(!passwordMatch){
        return {message: "User or password not found"}
        } 
        return {message:"Login successfully", user:user}
        }
}
