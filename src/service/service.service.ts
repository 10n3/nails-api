import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Service} from "./service.model";
import {CreateServiceDto} from "./dto/create-service.dto";

@Injectable()
export class ServiceService {
    constructor(@InjectModel(Service) private serviceRepository: typeof Service) {}

    async createService(dto: CreateServiceDto) {
        return await this.serviceRepository.create(dto);
    }

    async getAll() {
        return await this.serviceRepository.findAll( {include: {all: true}} );
    }
}
