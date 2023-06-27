import {Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UserService} from "./user.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";
import {SetRoleDto} from "../user-roles/dto/set-role.dto";
import {SetCompanyToUserDto} from "./dto/set-company-to-user.dto";

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(private usersService: UserService) {}


    @ApiOperation({ summary: 'User creation' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    async createUser(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({ summary: 'Get all user' })
    @ApiResponse({ status: 200, type: [User] })
    //@Roles("Admin")
    //@UseGuards(UserRolesGuard)
    @Get()
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({ summary: 'Get user by email' })
    @ApiResponse({ status: 200, type: User })
    @Get('/:email')
    async getUserByEmail(@Param('email') email: string) {
        return this.usersService.getUserByEmail(email);
    }

    @ApiOperation({ summary: 'Add user a role' })
    @ApiResponse({ status: 200, type: User })
    @Put('change-role')
    async setRole(@Body() dto: SetRoleDto) {
        return this.usersService.setRole(dto);
    }

    @ApiOperation({ summary: 'Add user a company' })
    @ApiResponse({ status: 200, type: User })
    @Put('change-company')
    async setCompany(@Body() dto: SetCompanyToUserDto) {
        return this.usersService.setCompany(dto);
    }

    @ApiOperation({ summary: 'Delete user (by email)' })
    @ApiResponse({ status: 200, type: User })
    @Delete('/:email')
    async deleteUserByEmail(@Param('email') email: string) {
        return this.usersService.deleteUserByEmail(email);
    }

}
