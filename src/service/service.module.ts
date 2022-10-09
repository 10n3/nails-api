import {forwardRef, Module} from '@nestjs/common';
import {ServiceService} from "./service.service";
import {ServiceController} from "./service.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {ServiceCategory} from "../service-category/service-category.model";
import {Service} from "./service.model";
import {Employees} from "../employees/employees.model";
import {Records} from "../records/records.model";

@Module({
    providers: [ServiceService],
    controllers: [ServiceController],

    imports: [
        SequelizeModule.forFeature([Service, ServiceCategory, Employees, Records]),
    ],

    exports: [
        ServiceService,
    ]
})
export class ServiceModule {}


