import { Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";
import {Company} from "./company.model";


@Table({ tableName: 'User-Company', createdAt: false, updatedAt: false })
export class UserCompany extends Model<UserCompany> {

    @Column( { type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey( () => Company )
    @Column( { type: DataType.INTEGER })
    companyId: string;

    @ForeignKey( () => User )
    @Column( { type: DataType.INTEGER })
    userId: string;

}