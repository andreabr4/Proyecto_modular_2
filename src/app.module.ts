import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlansController } from './plans/plans.controller';
import { PlansService } from './plans/plans.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Plan, PlanSchema } from './plans/plans.schema';
import { UserService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { User, UserSchema } from './users/Users.schema';

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/planApp"),
MongooseModule.forFeature([{
        name:Plan.name, 
        schema: PlanSchema,
        },
        {
          name:User.name, 
          schema:UserSchema,
        }
        ])],
  controllers: [AppController, PlansController, UsersController],
  providers: [AppService, PlansService, UserService],
})
export class AppModule {}

