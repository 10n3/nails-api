import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Client} from "./client.model";

@Module({
  providers: [ClientService],
  controllers: [ClientController],
  imports: [
      SequelizeModule.forFeature([Client]),

  ]
})
export class ClientModule {}
