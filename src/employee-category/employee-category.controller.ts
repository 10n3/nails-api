import {Body, Controller, Get, Post} from '@nestjs/common';
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
}
