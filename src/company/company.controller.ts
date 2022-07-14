import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CompanyService} from "./company.service";
import {CreateCompanyDto} from "./dto/create-company.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Company} from "./company.model";

@ApiTags('Company')
@Controller('company')
export class CompanyController {

    constructor(private companyService: CompanyService) {}

    @ApiOperation({ summary: 'Company creation' })
    @ApiResponse({ status: 201, type: Company })
    @Post()
    async createCompany(@Body() companyDto: CreateCompanyDto) {
        return await this.companyService.createCompany(companyDto);
    }

    @ApiOperation({ summary: 'Get all companies' })
    @ApiResponse({status: 200, type: [Company]})
    @Get()
    async getAllCompanies() {
        return await this.companyService.getAllCompanies();
    }

    @ApiOperation({ summary: 'Get company by name' })
    @ApiResponse({status: 200, type: Company})
    @Get('/:name')
    async getCompanyByName( @Param('name') name : string){
        return await this.companyService.getCompanyByName(name);
    }

}
