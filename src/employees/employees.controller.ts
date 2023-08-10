import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {EmployeesService} from "./employees.service";
import {Employees} from "./employees.model";
import {CreateEmployeeDto} from "./dto/create-employee.dto";
import {UserRoles} from "../user-roles/user-roles.model";
import {CreateUserRoleDto} from "../user-roles/dto/create-user-role.dto";

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

    @ApiOperation({ summary: 'Get employee by name' })
    @ApiResponse({ status: 200, type: Employees })
    @Get('/:name')
    async getEmployeeByName( @Param('name') name : string ) {
        return this.employeesService.getEmployeeByName(name);
    }

    @ApiOperation({ summary: 'Update employee by name' })
    @ApiResponse({status: 202, type: Boolean})
    @HttpCode(202)
    @Put()
    async updateEmployeeByTelNumber(@Body() dto : CreateEmployeeDto) {
        return await this.employeesService.updateEmployeeByName(dto);
    }

    @ApiOperation({ summary: 'Delete employee by name' })
    @ApiResponse({status: 202, type: Employees})
    @Delete('/:name')
    async deleteEmployeeByTelNumber(@Param('name') name : string) {
        return await this.employeesService.deleteEmployeeByName(name);
    }
}
