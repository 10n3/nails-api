import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Company} from "./company.model";
import {Client} from "../client/client.model";
import {ClientModule} from "../client/client.module";

@Module({
  providers: [CompanyService],
  controllers: [CompanyController],
  imports: [
      SequelizeModule.forFeature([Company, Client]),
      ClientModule
  ],

})
export class CompanyModule {}
