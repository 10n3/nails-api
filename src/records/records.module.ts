import { Module } from '@nestjs/common';
import { RecordsController } from './records.controller';
import {RecordsService} from "./records.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Employees} from "../employees/employees.model";
import {Service} from "../service/service.model";
import {Records} from "./records.model";
import {Client} from "../client/client.model";
import {Company} from "../company/company.model";

@Module({

  imports: [
    SequelizeModule.forFeature([Records, Company, Employees, Service, Client]),
  ],

  controllers: [RecordsController],
  providers: [RecordsService],

})
export class RecordsModule {}
