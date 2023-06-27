import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../user/user.model";
import {UserUserRoles} from "./user-user-role.model";

interface UserRolesCreationAttrs {
    name: string;
    description: string;
}


@Table({ tableName: 'User-roles' })
export class UserRoles extends Model<UserRoles, UserRolesCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Primary key (unique, autoincrement)' })
    @Column( { type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Admin', description: 'User role' })
    @Column( { type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({ example: 'Administrator', description: 'Role description' })
    @Column( { type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserUserRoles )
    users: User[];
}