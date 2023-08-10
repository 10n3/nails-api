import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ServiceService} from "./service.service";
import {Service} from "./service.model";
import {CreateServiceDto} from "./dto/create-service.dto";
import {UserRoles} from "../user-roles/user-roles.model";
import {CreateUserRoleDto} from "../user-roles/dto/create-user-role.dto";

@ApiTags('Service')
@Controller('service')
export class ServiceController {

    constructor(private serviceService: ServiceService) {}

    @ApiOperation({ summary: 'Service creation' })
    @ApiResponse({ status: 201, type: Service })
    @Post()
    async createService(@Body() dto: CreateServiceDto) {
        return this.serviceService.createService(dto);
    }

    @ApiOperation({ summary: 'Get all services' })
    @ApiResponse({ status: 200, type: [Service] })
    @Get()
    async getAll() {
        return this.serviceService.getAll();
    }

    @ApiOperation({ summary: 'Get service by name' })
    @ApiResponse({ status: 200, type: Service })
    @Get('/:name')
    async getRoleByName( @Param('name') name : string ) {
        return this.serviceService.getServiceByName(name);
    }

    @ApiOperation({ summary: 'Update service by name' })
    @ApiResponse({status: 202, type: Boolean})
    @HttpCode(202)
    @Put()
    async updateServiceByName(@Body() dto : CreateServiceDto) {
        return await this.serviceService.updateServiceByName(dto);
    }

    @ApiOperation({ summary: 'Delete service by name' })
    @ApiResponse({status: 202, type: Service})
    @Delete('/:name')
    async deleteServiceByName(@Param('name') name : string) {
        return await this.serviceService.deleteServiceByName(name);
    }
}
