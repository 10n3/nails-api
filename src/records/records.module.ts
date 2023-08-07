import { Module } from '@nestjs/common';
import { RecordsController } from './records.controller';
import {RecordsService} from "./records.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Employees} from "../employees/employees.model";
import {Service} from "../service/service.model";
import {Records} from "./records.model";
import {Client} from "../client/client.model";
import {Company} from "../company/company.model";
import {CompanyService} from "../company/company.service";
import {ServiceCategory} from "../service-category/service-category.model";
import {ServiceCategoryService} from "../service-category/service-category.service";
import {EmployeesService} from "../employees/employees.service";

@Module({

  imports: [
    SequelizeModule.forFeature([Records, Company, Employees, Service, Client, ServiceCategory]),
      Company, ServiceCategory,
      Employees,
  ],

  controllers: [RecordsController],
  providers: [RecordsService,
              CompanyService,
              ServiceCategoryService,
              EmployeesService],

})
export class RecordsModule {}
