import { Module } from '@nestjs/common';
import {ServiceCategoryService} from "./service-category.service";
import {ServiceCategoryController} from "./service-category.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {ServiceCategory} from "./service-category.model";
import {Company} from "../company/company.model";

@Module({
    providers: [ServiceCategoryService],
    controllers: [ServiceCategoryController],
    imports: [
        SequelizeModule.forFeature([ServiceCategory, Company]),
    ]
})
export class ServiceCategoryModule {
}
