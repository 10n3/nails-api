import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Company} from "../company/company.model";
import {ServiceCategory} from "../service-category/service-category.model";



@Table({ tableName: 'Service' })
export class Service extends Model<Service> {

    @ApiProperty({ example: '1', description: 'Primary key (unique, autoincrement)' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Removal, cleaning, coating', description: 'Service name' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: '120', description: 'Time spent on service' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    duration: number;

    @ApiProperty({ example: '400', description: 'Price that client may pay' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    price: number;

    @ApiProperty({ example: 'Hardware manicure', description: 'Service description' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @ApiProperty({ example: 'Service category', description: 'Service category that service belongs to', required: false })
    @ForeignKey( () => ServiceCategory )
    @Column( { type: DataType.NUMBER, allowNull: true})
    service_category_id: number;

    @BelongsTo( () => ServiceCategory )
    service_category: ServiceCategory;

}