import { Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {UserRoles} from "./user-roles.model";
import {User} from "../user/user.model";


@Table({ tableName: 'User-User-roles', createdAt: false, updatedAt: false })
export class UserUserRoles extends Model<UserUserRoles> {

    @Column( { type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey( () => UserRoles )
    @Column( { type: DataType.INTEGER })
    roleId: string;

    @ForeignKey( () => User )
    @Column( { type: DataType.INTEGER })
    userId: string;

}