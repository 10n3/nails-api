import {InjectModel} from "@nestjs/sequelize";
import {Injectable} from "@nestjs/common";
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
}

