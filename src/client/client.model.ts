import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Company} from "../company/company.model";
import {Records} from "../records/records.model";

@Table({ tableName: 'Client' })
export class Client extends Model<Client> {

    @ApiProperty({ example: '1', description: 'Primary key (unique, autoincrement)' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Elizabeth', description: 'Client name' })
    @Column( { type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({ example: 'Smith', description: 'Client surname', required: false })
    @Column( { type: DataType.STRING, allowNull: true})
    surname: string;

    @ApiProperty({ example: '+380666666666', description: 'Client tel number' })
    @Column( { type: DataType.STRING, unique: true, allowNull: false})
    tel_number: string;

    @ApiProperty({ example: 'male/female', description: 'Client sex', required: false })
    @Column( { type: DataType.STRING, allowNull: true})
    sex: string;

    @ApiProperty({ example: 'example@gmail.com', description: 'Mail address', required: false })
    @Column( { type: DataType.STRING, unique: true, allowNull: true})
    email: string;

    @ApiProperty({ example: '2002-07-08', description: 'Client birthday', required: false })
    @Column( { type: DataType.DATE, allowNull: true})
    birthday: object;

    @ApiProperty({ example: 'Client prefers...', description: 'Comment to client desires', required: false })
    @Column( { type: DataType.STRING, allowNull: true})
    comment: string;

    @ApiProperty({ example: '15', description: 'Id of company that client is belong to', required: false })
    @ForeignKey( () => Company )
    @Column( { type: DataType.NUMBER, allowNull: true})
    companyid: number;

    @BelongsTo( () => Company)
    company: Company;

    @HasMany( () => Records )
    records: Records[];
}