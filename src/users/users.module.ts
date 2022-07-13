import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";

@Module({
  imports: [
      SequelizeModule.forFeature([User]),
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
