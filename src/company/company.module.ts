import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Company} from "./company.model";

@Module({
  providers: [CompanyService],
  controllers: [CompanyController],
  imports: [
      SequelizeModule.forFeature([Company]),
  ],

})
export class CompanyModule {}
