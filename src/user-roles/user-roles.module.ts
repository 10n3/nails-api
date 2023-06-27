import { Module } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { UserRolesController } from './user-roles.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {UserRoles} from "./user-roles.model";
import {User} from "../user/user.model";
import {UserUserRoles} from "./user-user-role.model";

@Module({
  providers: [UserRolesService],
  controllers: [UserRolesController],
  imports: [
      SequelizeModule.forFeature([UserRoles, User, UserUserRoles]),
  ],
  exports: [
      UserRolesService
  ]
})
export class UserRolesModule {}
