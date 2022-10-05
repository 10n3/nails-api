import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {EmployeesService} from "./employees.service";
import {Employees} from "./employees.model";
import {CreateEmployeeDto} from "./dto/create-employee.dto";

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) {}

    @ApiOperation({ summary: 'Employee category creation' })
    @ApiResponse({ status: 201, type: Employees })
    @Post()
    async createOne(@Body() dto: CreateEmployeeDto) {
        return this.employeesService.createOne(dto);
    }

    @ApiOperation({ summary: 'Get all employees categories' })
    @ApiResponse({ status: 200, type: [Employees] })
    @Get()
    async getAll() {
        return this.employeesService.getAll();
    }
}
