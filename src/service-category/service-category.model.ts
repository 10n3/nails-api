import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Company} from "../company/company.model";
import {Service} from "../service/service.model";


@Table( { tableName: 'Service-category' } )
export class ServiceCategory extends Model<ServiceCategory> {
    @ApiProperty({ example: '1', description: 'Primary key (unique, autoincrement)' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Brows', description: 'Service name' })
    @Column( { type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({ example: '15', description: 'Id of company that service category is belong to', required: false })
    @ForeignKey( () => Company )
    @Column( { type: DataType.NUMBER, allowNull: true})
    companyid: number;

    @BelongsTo( () => Company)
    company: Company;

    @HasMany( () => Service )
    services: Service[];
}