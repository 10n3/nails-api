import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../user/user.model";
import {UserCompany} from "./user-company.model";
import {Client} from "../client/client.model";
import {ServiceCategory} from "../service-category/service-category.model";
import {Service} from "../service/service.model";
import {EmployeeCategory} from "../employee-category/employee-category.model";
import {Employees} from "../employees/employees.model";
import {Records} from "../records/records.model";

interface CompanyCreationAttrs {
    name: string;
    tel_number: string;
}

@Table({ tableName: 'Company' })
export class Company extends Model<Company, CompanyCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Primary key (unique, autoincrement)' })
    @Column( { type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true } )
    id: number;

    @ApiProperty({ example: 'KAIF beauty', description: 'Company name' })
    @Column( { type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({ example: '+380666666666', description: 'Telephone number' })
    @Column( { type: DataType.STRING, unique: true, allowNull: false})
    tel_number: string;

    @ApiProperty({ example: 'example@gmail.com', description: 'Email address', required: false })
    @Column( { type: DataType.STRING, unique: true, allowNull: true})
    email: string;

    @ApiProperty({ example: 'Ukraine', description: 'Company country', required: false })
    @Column( { type: DataType.STRING, allowNull: true})
    country: string;

    @ApiProperty({ example: 'Mariupol', description: 'City', required: false })
    @Column( { type: DataType.STRING, allowNull: true})
    city: string;

    @ApiProperty({ example: 'Зелінського, 100', description: 'Company address', required: false })
    @Column( { type: DataType.STRING, allowNull: true})
    address: string;

    @ApiProperty({ example: 'Our company is...', description: 'Company description', required: false })
    @Column( { type: DataType.STRING, allowNull: true})
    description: string;

    @BelongsToMany(() => User, () => UserCompany )
    users: User[];

    @HasMany( () => Client )
    clients: Client[];

    @HasMany( ()=> ServiceCategory )
    servicecategories: ServiceCategory[];

    @HasMany( () => Service )
    services: Service[];

    @HasMany( ()=> EmployeeCategory )
    employeecategories: EmployeeCategory[];

    @HasMany( () => Employees )
    employees: Employees[];

    @HasMany( () => Records )
    records: Records[];

}