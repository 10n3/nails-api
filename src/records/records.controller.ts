import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Employees} from "../employees/employees.model";
import {Records} from "./records.model";
import {RecordsService} from "./records.service";
import {CreateRecordDto} from "./dto/create-record.dto";
import {Company} from "../company/company.model";
import {SetCompanyDto} from "./dto/set-company.dto";
import {SetEmployeeDto} from "./dto/set-employee.dto";
import {GetPeriodDto} from "./dto/get-period.dto";
import {UserRoles} from "../user-roles/user-roles.model";
import {CreateUserRoleDto} from "../user-roles/dto/create-user-role.dto";

@ApiTags('Records')
@Controller('records')
export class RecordsController {
    constructor(private recordsService: RecordsService) {}

    @ApiOperation({ summary: 'Record creation' })
    @ApiResponse({ status: 201, type: Records })
    @Post()
    async createOne(@Body() dto: CreateRecordDto) {
        return this.recordsService.createOne(dto);
    }

    @ApiOperation({ summary: 'Get all records' })
    @ApiResponse({ status: 200, type: [Records] })
    @Get()
    async getAll() {
        return this.recordsService.getAll();
    }

    @ApiOperation({ summary: 'Get record by id' })
    @ApiResponse({ status: 200, type: Records })
    @Get('/:id')
    async getRecordByID( @Param('id') id : number ) {
        return this.recordsService.getRecordByID(id);
    }

    @ApiOperation({ summary: 'Update record by ID' })
    @ApiResponse({status: 202, type: Boolean})
    @HttpCode(202)
    @Put('/:id')
    async updateRoleByName(@Param('id') id: number, @Body() dto : CreateRecordDto) {
        return await this.recordsService.updateRecordByID(id, dto);
    }

    @ApiOperation({ summary: 'Delete record by ID' })
    @ApiResponse({status: 202, type: Records})
    @Delete('/:id')
    async deleteRecordByID(@Param('id') id : number) {
        return await this.recordsService.deleteRecordByID(id);
    }

    // @ApiOperation({ summary: 'Get record between 2 dates' })
    // @ApiResponse({ status: 200, type: [Records] })
    // @Post('get-between')
    // async getRecordByPeriod(@Body() dto: GetPeriodDto) {
    //     return this.recordsService.getRecordByPeriod(dto);
    // }
    //
    // @ApiOperation({ summary: 'Get count of all records' })
    // @ApiResponse({ status: 200, type: Number })
    // @Get('get-count')
    // async getCountOfAll() {
    //     return this.recordsService.getCountOfAll();
    // }
    //
    // @ApiOperation({ summary: 'Get total price between 2 dates' })
    // @ApiResponse({ status: 200, type: Number })
    // @Post('total-price')
    // async calculatePriceBtw2Dates(@Body() dto: GetPeriodDto) {
    //     return this.recordsService.calculatePriceBtw2Dates(dto);
    // }

    // @ApiOperation({ summary: 'Get avg price between 2 dates' })
    // @ApiResponse({ status: 200, type: Number })
    // @Post('avg-price')
    // async calculateAveragePrice(@Body() dto: GetPeriodDto) {
    //     return this.recordsService.calculateAveragePrice(dto);
    // }


    @ApiOperation({ summary: 'Add record a company' })
    @ApiResponse({ status: 200, type: Company })
    @Put('change-company')
    async setCompany(@Body() dto: SetCompanyDto) {
        return this.recordsService.setCompany(dto);
    }

    @ApiOperation({ summary: 'Add record an employee' })
    @ApiResponse({ status: 200, type: Employees })
    @Put('change-employee')
    async setEmployee(@Body() dto: SetEmployeeDto) {
        return this.recordsService.setEmployee(dto);
    }
}
