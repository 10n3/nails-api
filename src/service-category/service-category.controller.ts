import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ClientService} from "../client/client.service";
import {ServiceCategoryService} from "./service-category.service";
import {Client} from "../client/client.model";
import {CreateClientDto} from "../client/dto/create-client.dto";
import {ServiceCategory} from "./service-category.model";
import {CreateServiceCategoryDto} from "./dto/create-service-category.dto";

@ApiTags('Service category')
@Controller('service-category')
export class ServiceCategoryController {

    constructor(private serviceCategoryService: ServiceCategoryService) {}

    @ApiOperation({ summary: 'Service category creation' })
    @ApiResponse({ status: 201, type: ServiceCategory })
    @Post()
    async createClient(@Body() dto: CreateServiceCategoryDto) {
        return this.serviceCategoryService.createServiceCategory(dto);
    }



}
