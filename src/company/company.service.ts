import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Company} from "./company.model";
import {CreateCompanyDto} from "./dto/create-company.dto";

@Injectable()
export class CompanyService {

    constructor(@InjectModel(Company) private companyRepository: typeof Company) {}

    async createCompany(dto: CreateCompanyDto) {
        return await this.companyRepository.create(dto);
    }

    async getAllCompanies(){
        return await this.companyRepository.findAll({ include: { all: true } });
    }

    async getCompanyByName(name: string){
        return await this.companyRepository.findOne( { where: { name } });
    }

}
