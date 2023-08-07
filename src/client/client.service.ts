import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Client} from "./client.model";
import {CreateClientDto} from "./dto/create-client.dto";
import sequelize, {Op} from "sequelize";
import {Records} from "../records/records.model";
import {Service} from "../service/service.model";

@Injectable()
export class ClientService {

    constructor(@InjectModel(Client) private clientRepository: typeof Client,
                 @InjectModel(Records) private recordsRepository: typeof Records) {}

    async createClient(dto: CreateClientDto){
        return await this.clientRepository.create(dto);
    }

    async getAllClients() {
        return await this.clientRepository.findAll({ include: { all: true } });
    }

    async getClientByName(name: string) {
        const client =  await this.clientRepository.findOne( { where: { name } });
        if(!client) { throw new HttpException('Client with this name NOT FOUND', HttpStatus.NOT_FOUND); }
        return client;

    }

    async getClientByTelNumber(tel_number : string) {
        const client = await this.clientRepository.findOne( { where: { tel_number } });
        if(!client) { throw new HttpException('Client with this number NOT FOUND', HttpStatus.NOT_FOUND); }
        return client;
    }

    async updateClientByTelNumber(dto: CreateClientDto) {
        const client = await this.getClientByTelNumber(dto.tel_number);
        if (!client) { throw new HttpException('Client with this number NOT FOUND', HttpStatus.NOT_FOUND); }

        return await this.clientRepository.update( { ...dto, ...client }, { where: { tel_number: dto.tel_number } } );
    }

    async deleteClientByTelNumber(tel_number: string) {
        const client = await this.getClientByTelNumber(tel_number);
        if (!client) { throw new HttpException('Client with this number NOT FOUND', HttpStatus.NOT_FOUND);}

        await this.clientRepository.destroy({ where: { tel_number } });

        return client;

    }

}
