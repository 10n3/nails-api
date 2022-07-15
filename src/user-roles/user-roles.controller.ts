import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserRolesService} from "./user-roles.service";
import {User} from "../users/users.model";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UserRoles} from "./user-roles.model";
import {CreateUserRoleDto} from "./dto/create-user-role.dto";

@ApiTags('User-Roles')
@Controller('user-roles')
export class UserRolesController {

    constructor( private userRolesService: UserRolesService){}

    @ApiOperation({ summary: 'User-role creation' })
    @ApiResponse({ status: 200, type: UserRoles })
    @Post()
    async createUser(@Body() dto: CreateUserRoleDto) {
        return this.userRolesService.createUserRole(dto);
    }

    @ApiOperation({ summary: 'Get all user roles' })
    @ApiResponse({ status: 200, type: [UserRoles] })
    @Get()
    async getAllUserRoles() {
        return this.userRolesService.getAllRoles();
    }

    @ApiOperation({ summary: 'Get role by name' })
    @ApiResponse({ status: 200, type: UserRoles })
    @Get('/:name')
    async getRoleByName( @Param('name') name : string ) {
        return this.userRolesService.getRoleByName(name);
    }
}
