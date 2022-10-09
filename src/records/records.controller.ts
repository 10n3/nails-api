import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Employees} from "../employees/employees.model";
import {Records} from "./records.model";
import {RecordsService} from "./records.service";
import {CreateRecordDto} from "./dto/create-record.dto";

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
}
