import {forwardRef, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {UserRoles} from "../user-roles/user-roles.model";
import {UserUserRoles} from "../user-roles/user-user-role.model";
import {UserRolesModule} from "../user-roles/user-roles.module";
import {CompanyModule} from "../company/company.module";
import {AuthModule} from "../auth/auth.module";
import {Client} from "../client/client.model";
import {Company} from "../company/company.model";

@Module({
  imports: [
      SequelizeModule.forFeature([User, UserRoles, UserUserRoles, Client, Company]),
      UserRolesModule,
      CompanyModule,
      //forwardRef(() => AuthModule),
  ],
  providers: [UsersService],
  controllers: [UserController],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}
