import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ServiceCategoryService} from "./service-category.service";
import {ServiceCategory} from "./service-category.model";
import {CreateServiceCategoryDto} from "./dto/create-service-category.dto";
import {CreateUserRoleDto} from "../user-roles/dto/create-user-role.dto";

@ApiTags('Service category')
@Controller('service-category')
export class ServiceCategoryController {

    constructor(private serviceCategoryService: ServiceCategoryService) {}

    @ApiOperation({ summary: 'Service category creation' })
    @ApiResponse({ status: 201, type: ServiceCategory })
    @Post()
    async createOne(@Body() dto: CreateServiceCategoryDto) {
        return this.serviceCategoryService.createServiceCategory(dto);
    }

    @ApiOperation({ summary: 'Get all service categories' })
    @ApiResponse({ status: 200, type: [ServiceCategory] })
    @Get()
    async getAll() {
        return this.serviceCategoryService.getAllServiceCetegories();
    }

    @ApiOperation({ summary: 'Get service category by name' })
    @ApiResponse({ status: 200, type: [ServiceCategory] })
    @Get('/:name')
    async getServiceCategoryByName(@Param('name') name: string) {
        return this.serviceCategoryService.getServiceCategoryByName(name);
    }

    @ApiOperation({ summary: 'Update category by name' })
    @ApiResponse({status: 202, type: Boolean})
    @HttpCode(202)
    @Put()
    async updateClientByTelNumber(@Body() dto : CreateUserRoleDto) {
        return await this.serviceCategoryService.updateServiceCategoryByName(dto);
    }

    @ApiOperation({ summary: 'Delete category by name' })
    @ApiResponse({status: 202, type: ServiceCategory})
    @Delete('/:name')
    async deleteClientByTelNumber(@Param('name') name : string) {
        return await this.serviceCategoryService.deleteUserRoleByName(name);
    }


}
