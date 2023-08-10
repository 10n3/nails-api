import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {EmployeeCategoryService} from "./employee-category.service";
import {EmployeeCategory} from "./employee-category.model";
import {CreateEmployeeCategoryDto} from "./dto/create-employee-category.dto";

@ApiTags('Employee category')
@Controller('employees-category')
export class EmployeeCategoryController {
    constructor(private employeeCategoryService: EmployeeCategoryService) {}

    @ApiOperation({ summary: 'Employee category creation' })
    @ApiResponse({ status: 201, type: EmployeeCategory })
    @Post()
    async createOne(@Body() dto: CreateEmployeeCategoryDto) {
        return this.employeeCategoryService.createOne(dto);
    }

    @ApiOperation({ summary: 'Get all employees categories' })
    @ApiResponse({ status: 200, type: [EmployeeCategory] })
    @Get()
    async getAll() {
        return this.employeeCategoryService.getAll();
    }

    @ApiOperation({ summary: 'Get employee category by name' })
    @ApiResponse({ status: 200, type: EmployeeCategory })
    @Get('/:name')
    async getEmployeeCategoryByName(@Param('name') name: string) {
        return this.employeeCategoryService.getEmployeeByName(name);
    }

    @ApiOperation({ summary: 'Update employee category by name' })
    @ApiResponse({ status: 202, type: Boolean })
    @Put()
    async updateEmployeeCategoryByName(@Body() dto: CreateEmployeeCategoryDto) {
        return this.employeeCategoryService.updateEmployeeByName(dto);
    }

    @ApiOperation({ summary: 'Delete employee category by name' })
    @ApiResponse({ status: 202, type: EmployeeCategory })
    @Delete('/:name')
    async deleteEmployeeCategoryByName(@Param('name') name: string) {
        return this.employeeCategoryService.deleteEmployeeByName(name);
    }

}
