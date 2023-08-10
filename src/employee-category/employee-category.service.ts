import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
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

    async getEmployeeByName(name: string) {
        return await this.employeeCategoryRepository.findOne( { where: {name} });
    }

    async updateEmployeeByName(dto: CreateEmployeeCategoryDto) {
        const employeeCategory = await this.getEmployeeByName(dto.name);
        if(!employeeCategory) { throw new HttpException('Role with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        return await this.employeeCategoryRepository.update( { ...dto, ...employeeCategory }, {where: { name: dto.name}} );
    }

    async deleteEmployeeByName(name: string) {
        const employeeCategory = await this.getEmployeeByName(name);
        if(!employeeCategory) { throw new HttpException('Role with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        await this.employeeCategoryRepository.destroy( { where: { name }});
        return employeeCategory;
    }


}
