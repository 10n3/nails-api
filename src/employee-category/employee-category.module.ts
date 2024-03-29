import { Module } from '@nestjs/common';
import {EmployeeCategoryService} from "./employee-category.service";
import {EmployeeCategoryController} from "./employee-category.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Company} from "../company/company.model";
import {EmployeeCategory} from "./employee-category.model";
import {Employees} from "../employees/employees.model";

@Module({
    providers: [EmployeeCategoryService],
    controllers: [EmployeeCategoryController],
    imports: [
        SequelizeModule.forFeature([EmployeeCategory, Company, Employees]),

    ],
    exports: [
        EmployeeCategoryService
    ]
})
export class EmployeeCategoryModule {}

