import {HttpException, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Company} from "./company.model";
import {CreateCompanyDto} from "./dto/create-company.dto";
import {AddServiceCategoryDto} from "./dto/add-service-category.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {ServiceCategoryService} from "../service-category/service-category.service";
import {ExceptionHandler} from "@nestjs/core/errors/exception-handler";

@Injectable()
export class CompanyService {

    constructor(@InjectModel(Company) private companyRepository: typeof Company,
                                      private serviceCategoryService: ServiceCategoryService) {}

    async createCompany(dto: CreateCompanyDto) {
        return await this.companyRepository.create(dto);
    }

    async getAllCompanies(){
        return await this.companyRepository.findAll({ include: { all: true } });
    }

    async getCompanyByName(name: string){
        return await this.companyRepository.findOne( { where: { name } });
    }

    async addServiceCategory(dto: AddServiceCategoryDto) {
        const company = await this.getCompanyByName(dto.companyName);
        if (!company) {
            throw new HttpException(dto.companyName, 404);
        }
        const serviceCategory = await this.serviceCategoryService.getServiceCategoryByName(dto.serviceCategoryName);

        await company.$set('servicecategories', serviceCategory);

        company.servicecategories = [serviceCategory];

        return company;
    }
}
