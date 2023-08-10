import {InjectModel} from "@nestjs/sequelize";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {Employees} from "./employees.model";
import {CreateEmployeeDto} from "./dto/create-employee.dto";
import {CreateUserRoleDto} from "../user-roles/dto/create-user-role.dto";

@Injectable()
export class EmployeesService {

    constructor(@InjectModel(Employees) private employeesRepository: typeof Employees) {}

    async createOne(dto: CreateEmployeeDto) {
        return await this.employeesRepository.create(dto);
    }

    async getAll() {
        return await this.employeesRepository.findAll({include: {all: true}});
    }

    async getEmployeeByName(name: string) {
        return await this.employeesRepository.findOne({ where: { name }, include: { all: true } });
    }

    async updateEmployeeByName(dto: CreateEmployeeDto) {
        const employee = await this.getEmployeeByName(dto.name);

        if(!employee) { throw new HttpException('Employee with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        return await this.employeesRepository.update( { ...dto, ...employee },  { where: { name: dto.name } });
    }

    async deleteEmployeeByName(name: string) {
        const employee = await this.getEmployeeByName(name);
        if(!employee) { throw new HttpException('Employee with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        await this.employeesRepository.destroy({ where: {name} });
        return employee;
    }
}

