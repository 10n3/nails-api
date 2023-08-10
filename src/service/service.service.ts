import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Service} from "./service.model";
import {CreateServiceDto} from "./dto/create-service.dto";
import {CreateUserRoleDto} from "../user-roles/dto/create-user-role.dto";

@Injectable()
export class ServiceService {
    constructor(@InjectModel(Service) private serviceRepository: typeof Service) {}

    async createService(dto: CreateServiceDto) {
        return await this.serviceRepository.create(dto);
    }

    async getAll() {
        return await this.serviceRepository.findAll( {include: {all: true}} );
    }

    async getServiceByName(name: string) {
        return await this.serviceRepository.findOne( { where: {name} } );
    }

    async updateServiceByName(dto: CreateServiceDto) {
        const service = await this.getServiceByName(dto.name);

        if(!service) { throw new HttpException('Service with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        return await this.serviceRepository.update( { ...dto, ...service },  { where: { name: dto.name } });
    }

    async deleteServiceByName(name: string) {
        const service = await this.getServiceByName(name);
        if(!service) { throw new HttpException('Service with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        await this.serviceRepository.destroy({ where: {name} });
        return service;
    }
}
