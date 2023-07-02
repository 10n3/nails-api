import {forwardRef, Module} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {UserRoles} from "../user-roles/user-roles.model";
import {UserUserRoles} from "../user-roles/user-user-role.model";
import {UserRolesModule} from "../user-roles/user-roles.module";
import {CompanyModule} from "../company/company.module";
import {Client} from "../client/client.model";
import {Company} from "../company/company.model";

@Module({
  imports: [
      SequelizeModule.forFeature([User, UserRoles, UserUserRoles, Client, Company]),
      UserRolesModule,
      CompanyModule,
  ],
  providers: [UserService],
  controllers: [UserController],
    exports: [
        UserService,
    ]
})
export class UserModule {}
