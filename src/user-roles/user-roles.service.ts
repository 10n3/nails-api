import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {UserRoles} from "./user-roles.model";
import {CreateUserRoleDto} from "./dto/create-user-role.dto";


@Injectable()
export class UserRolesService {
    constructor(@InjectModel(UserRoles) private userRolesRepository: typeof UserRoles) {}

    async createUserRole(dto: CreateUserRoleDto) {
        return await this.userRolesRepository.create(dto);
    }

    async getAllRoles() {
        return await this.userRolesRepository.findAll( { include: {all: true} } );
    }

    async getRoleByName(name: string) {
        return await this.userRolesRepository.findOne( { where: {name} } );
    }

    async updateUserRoleByName(dto: CreateUserRoleDto) {
        const userRole = await this.getRoleByName(dto.name);

        if(!userRole) { throw new HttpException('Role with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        return await this.userRolesRepository.update( { ...dto, ...userRole },  { where: { name: dto.name } });
    }

    async deleteUserRoleByName(name: string) {
        const userRole = await this.getRoleByName(name);
        if(!userRole) { throw new HttpException('Role with this name NOT FOUND', HttpStatus.NOT_FOUND); }

        await this.userRolesRepository.destroy({ where: {name} });
        return userRole;
    }

}
