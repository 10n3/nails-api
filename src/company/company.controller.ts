import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {CompanyService} from "./company.service";
import {CreateCompanyDto} from "./dto/create-company.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../user/user.model";
import {Company} from "./company.model";
import {SetRoleDto} from "../user-roles/dto/set-role.dto";
import {AddServiceCategoryDto} from "./dto/add-service-category.dto";

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
    @Get('all')
    async getAllCompanies() {
        return await this.companyService.getAllCompanies();
    }

    @ApiOperation({ summary: 'Get company by name' })
    @ApiResponse({status: 200, type: Company})
    @Get('/:name')
    async getCompanyByName( @Param('name') name : string){
        return await this.companyService.getCompanyByName(name);
    }

    // @ApiOperation({ summary: 'Add company a service category' })
    // @ApiResponse({ status: 200, type: Company })
    // @Put('add-service-category')
    // async setRole(@Body() dto: AddServiceCategoryDto) {
    //     return this.companyService.addServiceCategory(dto);
    // }

    @ApiOperation({ summary: 'Updating company' })
    @ApiResponse( { status: 202, type: Boolean } )
    @HttpCode(202)
    @Put()
    async updateCompanyByName(@Body() dto: CreateCompanyDto) {
        return await this.companyService.updateCompanyByName(dto.name, dto);
    }

    @ApiOperation({ summary: 'Delete company (by name)' })
    @ApiResponse({ status: 200, type: Company })
    @Delete('/:name')
    async deleteCompanyByEmail(@Param('name') name: string) {
        return this.companyService.deleteCompanyByName(name);

    }

}
