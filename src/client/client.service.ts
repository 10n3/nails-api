import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {UserRolesService} from "../user-roles/user-roles.service";
import {Client} from "./client.model";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {CreateClientDto} from "./dto/create-client.dto";

@Injectable()
export class ClientService {

    constructor(@InjectModel(Client) private clientRepository: typeof Client,
                 ) {}

    async createClient(dto: CreateClientDto){
        return await this.clientRepository.create(dto);
    }

    async getAllClients() {
        return await this.clientRepository.findAll({ include: { all: true } });
    }

    async getClientByName(name: string) {
        return await this.clientRepository.findOne( { where: { name } });
    }

}
