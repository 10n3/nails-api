import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Company} from "./company.model";
import {Client} from "../client/client.model";
import {ClientModule} from "../client/client.module";
import {ServiceCategory} from "../service-category/service-category.model";
import {ServiceCategoryModule} from "../service-category/service-category.module";
import {ServiceCategoryService} from "../service-category/service-category.service";
import {ServiceModule} from "../service/service.module";
import {EmployeeCategory} from "../employee-category/employee-category.model";
import {EmployeeCategoryModule} from "../employee-category/employee-category.module";

@Module({
  providers: [CompanyService],
  controllers: [CompanyController],
  imports: [
      SequelizeModule.forFeature([Company, Client, ServiceCategory, EmployeeCategory]),
      ClientModule,
      ServiceCategoryModule,
      ServiceModule,
      EmployeeCategoryModule
  ],

})
export class CompanyModule {}
