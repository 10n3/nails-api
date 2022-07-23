import {Body, Controller, Get, Inject, Param, Post, Put, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {UserRolesGuard} from "../auth/user-roles.guard";
import {SetRoleDto} from "../user-roles/dto/set-role.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}


    @ApiOperation({ summary: 'User creation' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    async createUser(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, type: [User] })
    // @Roles("Admin")
    // @UseGuards(UserRolesGuard)
    @Get()
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({ summary: 'Get usr by email' })
    @ApiResponse({ status: 200, type: User })
    @Get('/:email')
    async getUserByEmail(@Param('email') email: string) {
        return this.usersService.getUserByEmail(email);
    }

    @ApiOperation({ summary: 'Add user a role' })
    @ApiResponse({ status: 200, type: User })
    @Put()
    async setRole(@Body() dto: SetRoleDto) {
        return this.usersService.setRole(dto);
    }


}
