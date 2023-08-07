import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Company} from "./company.model";
import {Client} from "../client/client.model";
import {ClientModule} from "../client/client.module";
import {ServiceCategory} from "../service-category/service-category.model";
import {ServiceCategoryModule} from "../service-category/service-category.module";
import {ServiceModule} from "../service/service.module";
import {EmployeeCategory} from "../employee-category/employee-category.model";
import {EmployeeCategoryModule} from "../employee-category/employee-category.module";
import {Records} from "../records/records.model";
import {RecordsModule} from "../records/records.module";

@Module({
    providers: [CompanyService],
    controllers: [CompanyController],
    imports: [
        SequelizeModule.forFeature([Company, Client, ServiceCategory, EmployeeCategory, Records]),
        ClientModule,
        ServiceCategoryModule,
        ServiceModule,
        EmployeeCategoryModule,
        RecordsModule
    ],
    exports: [
        CompanyService,
    ]

})
export class CompanyModule {}
