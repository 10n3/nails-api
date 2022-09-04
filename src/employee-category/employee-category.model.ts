import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Company} from "../company/company.model";


@Table( { tableName: 'Employee-category' } )
export class EmployeeCategory extends Model<EmployeeCategory> {
    @ApiProperty({ example: '1', description: 'Primary key (unique, autoincrement)' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Nail master', description: 'Employee category name' })
    @Column( { type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({ example: '15', description: 'Id of company that service category is belong to', required: false })
    @ForeignKey( () => Company )
    @Column( { type: DataType.INTEGER, allowNull: true})
    companyid: number;

    @BelongsTo( () => Company)
    company: Company;

}