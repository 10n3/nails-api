import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Client} from "./client.model";
import {Company} from "../company/company.model";
import {Records} from "../records/records.model";

@Module({
  providers: [ClientService],
  controllers: [ClientController],
  imports: [
      SequelizeModule.forFeature([Client, Company, Records]),

  ]
})
export class ClientModule {}
