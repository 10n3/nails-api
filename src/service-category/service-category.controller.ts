import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ServiceCategoryService} from "./service-category.service";
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

    @ApiOperation({ summary: 'Get all service categories' })
    @ApiResponse({ status: 200, type: [ServiceCategory] })
    @Get()
    async getAllServiceCategories() {
        return this.serviceCategoryService.getAllServiceCetegories();
    }

    @ApiOperation({ summary: 'Get service category by name' })
    @ApiResponse({ status: 200, type: [ServiceCategory] })
    @Get('/:name')
    async getServiceCategoryByName(@Param('name') name: string) {
        return this.serviceCategoryService.getServiceCategoryByName(name);
    }




}
