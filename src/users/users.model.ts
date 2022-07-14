import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {UserRoles} from "../user-roles/user-roles.model";
import {UserUserRoles} from "../user-roles/user-user-role.model";
import {Company} from "../company/company.model";
import {UserCompany} from "../company/user-company.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}


@Table({ tableName: 'Users' })
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Primary key (unique, autoincrement)' })
    @Column( { type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'example@gmail.com', description: 'Mail address' })
    @Column( { type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({ example: 'password1234', description: 'User password' })
    @Column( { type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({ example: 'true', description: 'User ban status' })
    @Column( { type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({ example: 'For spam', description: 'Ban reason' })
    @Column( { type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => UserRoles, () => UserUserRoles )
    roles: UserRoles[];

    @BelongsToMany( ()=> Company, () => UserCompany )
    companies: Company[];
}