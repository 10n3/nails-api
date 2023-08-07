import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Employees} from "./employees.model";
import {EmployeeCategory} from "../employee-category/employee-category.model";
import {Service} from "../service/service.model";
import {Records} from "../records/records.model";

@Module({
  imports: [
    SequelizeModule.forFeature([Employees, EmployeeCategory, Service, Records]),

  ],

  exports: [
      EmployeesService,
  ],

  controllers: [EmployeesController],
  providers: [EmployeesService],

})
export class EmployeesModule {}
