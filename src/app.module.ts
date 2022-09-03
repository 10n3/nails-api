import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import {SequelizeModule} from "@nestjs/sequelize";
import { CompanyModule } from './company/company.module';
import {Company} from "./company/company.model";
import { UserRolesModule } from './user-roles/user-roles.module';
import {UserRoles} from "./user-roles/user-roles.model";
import {UserUserRoles} from "./user-roles/user-user-role.model";
import {UserCompany} from "./company/user-company.model";
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import {Client} from "./client/client.model";
import { ServiceCategoryModule } from './service-category/service-category.module';
import {ServiceCategory} from "./service-category/service-category.model";
import { ServiceService } from './service/service.service';
import { ServiceModule } from './service/service.module';
import {Service} from "./service/service.model";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [
          User,
          Company,
          UserRoles,
          UserUserRoles,
          UserCompany,
          Client,
          ServiceCategory,
          Service
      ],
      synchronize: true,
      autoLoadModels: true,
    }),
    UsersModule,
    CompanyModule,
    UserRolesModule,
    AuthModule,
    ClientModule,
    ServiceCategoryModule,
    ServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
