import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './Users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
        constructor (@InjectModel(User.name) private userModel:Model<UserDocument>){}

        async createUser(user:any){
            let newUser=new User()
            newUser.userID=user.userID
            newUser.name=user.name
            newUser.surname=user.surname
            newUser.email=user.email
            newUser.password=user.password
        
            return await this.userModel.create(newUser)
        }

        async searchUser(body:any){
            return await this.userModel.findOne({
            email:body.email, 
            password:body.password
            })
        }
}
