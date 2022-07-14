import { Injectable } from '@nestjs/common';
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
        return await this.userRolesRepository.findOne( { where: {name} } )
    }

}
