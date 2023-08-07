import {HttpCode, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Company} from "./company.model";
import {CreateCompanyDto} from "./dto/create-company.dto";
import {AddServiceCategoryDto} from "./dto/add-service-category.dto";
import {ServiceCategoryService} from "../service-category/service-category.service";

@Injectable()
export class CompanyService {

    constructor(@InjectModel(Company) private companyRepository: typeof Company,
                                      private serviceCategoryService: ServiceCategoryService) {}

    async createCompany(dto: CreateCompanyDto) {
        const newCompany =  await this.companyRepository.create(dto);

        return newCompany;

    }

    async getAllCompanies(){
        return await this.companyRepository.findAll({ include: { all: true } });
    }

    async getCompanyByName(name: string){
        const company = await this.companyRepository.findOne( { where: { name: name } });
        if(!company) { throw new HttpException('Company NOT FOUND', HttpStatus.NOT_FOUND); }

        return company;
    }

    async updateCompanyByName(name: string, companyData: CreateCompanyDto) {
        const company = await this.getCompanyByName(name);

        if(!company) {
            throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
        }

        return await this.companyRepository.update( { ...company, ...companyData }, { where: {name:name} })
    }

    async deleteCompanyByName( companyName: string ) {

        const company = await this.getCompanyByName(companyName);
        if(!company) { throw new HttpException('Company with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        await this.companyRepository.destroy( { where: { name: companyName } } );

        return company;
    }

    // async addServiceCategory(dto: AddServiceCategoryDto) {
    //     const company = await this.getCompanyByName(dto.companyName);
    //     if (!company) {
    //         throw new HttpException(dto.companyName, 404);
    //     }
    //     const serviceCategory = await this.serviceCategoryService.getServiceCategoryByName(dto.serviceCategoryName);
    //
    //     await company.$set('servicecategories', serviceCategory);
    //
    //     company.servicecategories = [serviceCategory];
    //
    //     return company;
    // }
}
