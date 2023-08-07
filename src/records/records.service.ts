import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Records} from "./records.model";
import {CreateRecordDto} from "./dto/create-record.dto";
import {SetCompanyDto} from "./dto/set-company.dto";
import {CompanyService} from "../company/company.service";
import {SetEmployeeDto} from "./dto/set-employee.dto";
import {EmployeesService} from "../employees/employees.service";
import {Service} from "../service/service.model";

@Injectable()
export class RecordsService {

    constructor(@InjectModel(Records) private recordsRepository: typeof Records,
                                      private companyService:CompanyService,
                @InjectModel(Service) private employeeService: EmployeesService
                                      ) {}

    async createOne(dto: CreateRecordDto) {
        return await this.recordsRepository.create(dto);
    }

    async getAll() {
        return await this.recordsRepository.findAll({include: {all: true}});
    }

    async getRecordByID (id: number) {
        const record = await this.recordsRepository.findOne({ where: {id}, include: { all: true } });

        if(!record) { throw new HttpException('Record with this ID NOT FOUND', HttpStatus.NOT_FOUND); }
        return record;
    }

    async setCompany(dto: SetCompanyDto) {
        const record = await this.getRecordByID(dto.id);

        const company = await this.companyService.getCompanyByName(dto.company_name);

        await record.$set('company', [company.id]);
        record.company_id = [company];


        return record;
    }

    async setEmployee(dto: SetEmployeeDto) {

        try {
            const record = await this.getRecordByID(dto.id);

            const employee = await this.employeeService.getEmployeeByName(dto.employee_name);

            await record.$set('employee', [employee.id]);
            record.employee_id = [employee];

            return record;

        }
        catch(e) {
            return {e}
        }
    }

    // async getRecordByPeriod(dto: GetPeriodDto) {
    //     try {
    //         return await this.recordsRepository.findAll(
    //             {
    //                 where:
    //                     {
    //                         date: {
    //                             [Op.between]: [dto.date1, dto.date2]
    //                         }
    //                     },
    //                 order: [['date', 'ASC']]
    //             });
    //     }
    //     catch (e) {
    //         return {e};
    //     }
    // }
    //
    // async getCountOfAll() {
    //     try {
    //         return await this.recordsRepository.count();
    //     } catch (e) {
    //         return {e};
    //     }
    // }
    //
    // async calculatePriceBtw2Dates(dto: GetPeriodDto) {
    //     const sum = await Records.findAll({
    //         attributes: [
    //           [sequelize.fn('SUM', sequelize.col('price')), 'totalPrice']
    //         ],
    //         include: [
    //             {
    //                 model: Service,
    //                 attributes: []
    //             }
    //         ],
    //         where: {
    //             date: {
    //                 [Op.gte]: new Date(dto.date1),
    //                 [Op.lt]: new Date(dto.date2),
    //             }
    //         },
    //         group: ['Records.id']
    //     })
    //
    //     return sum;
    // }
    //
    // async calculateAveragePrice(dto: GetPeriodDto) {
    //     const  avg  = await this.recordsRepository.findOne({
    //         attributes: [
    //             [sequelize.fn('AVG', sequelize.col('price')), 'averageCheck']
    //         ],
    //         include: [
    //             {
    //                 model: Service,
    //                 attributes: []
    //             }
    //         ],
    //         where: {
    //             date: {
    //                 [Op.gte]: new Date(dto.date1),
    //                 [Op.lt]: new Date(dto.date2),
    //             }
    //         },
    //         raw: true,
    //         group: ['Records.id'],
    //     });
    //
    //     return avg;
    // }

}
