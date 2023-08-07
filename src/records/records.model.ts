import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Company} from "../company/company.model";
import {Employees} from "../employees/employees.model";
import {Service} from "../service/service.model";
import {Client} from "../client/client.model";

@Table({ tableName: 'Records' })
export class Records extends Model<Records> {

    @ApiProperty({ example: '1', description: 'Primary key (unique, autoincrement)' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '10:35', description: 'Record time' })
    @Column( { type: DataType.STRING, allowNull: false})
    time: string;

    @ApiProperty({ example: '10.10.2022', description: 'Record date', required: false })
    @Column( { type: DataType.STRING, allowNull: true})
    date: string;

    @ApiProperty({ example: 'Client loves wine', description: 'Comment to record' })
    @Column( { type: DataType.STRING, allowNull: false})
    comment: string;

    @ApiProperty({ example: '15', description: 'Id of company that record is belong to', required: false })
    @ForeignKey( () => Company )
    @Column( { type: DataType.INTEGER, allowNull: true})
    company_id: Company[];

    @BelongsTo( () => Company)
    company: Company;

    @ApiProperty({ example: '15', description: 'Id of employee that record is belong to', required: false })
    @ForeignKey( () => Employees )
    @Column( { type: DataType.INTEGER, allowNull: true})
    employee_id: any[];

    @BelongsTo( () => Employees)
    employee: Employees;

    @ApiProperty({ example: '15', description: 'Id of service that record is belong to', required: false })
    @ForeignKey( () => Service )
    @Column( { type: DataType.INTEGER, allowNull: true})
    service_id: number;

    @BelongsTo( () => Service)
    service: Service;

    @ApiProperty({ example: '15', description: 'Id of client that record is belong to', required: false })
    @ForeignKey( () => Client )
    @Column( { type: DataType.INTEGER, allowNull: true})
    client_id: number;



    @BelongsTo( () => Client)
    client: Client;

}