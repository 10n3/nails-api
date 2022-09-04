import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {EmployeeCategory} from "./employee-category.model";
import {CreateEmployeeCategoryDto} from "./dto/create-employee-category.dto";

@Injectable()
export class EmployeeCategoryService {

    constructor(@InjectModel(EmployeeCategory) private employeeCategoryRepository: typeof EmployeeCategory) {}

    async createOne(dto: CreateEmployeeCategoryDto) {
        return await this.employeeCategoryRepository.create(dto);
    }

    async getAll() {
        return await this.employeeCategoryRepository.findAll({include: {all: true}});
    }
}
