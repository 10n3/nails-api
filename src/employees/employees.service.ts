import {InjectModel} from "@nestjs/sequelize";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {Employees} from "./employees.model";
import {CreateEmployeeDto} from "./dto/create-employee.dto";

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
        const employee = await this.employeesRepository.findOne({ where: {name} });
        if(!employee) { throw new HttpException('Employee with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        return employee;
    }
}

