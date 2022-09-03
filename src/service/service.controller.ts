import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ServiceService} from "./service.service";
import {Service} from "./service.model";
import {CreateServiceDto} from "./dto/create-service.dto";

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
}
