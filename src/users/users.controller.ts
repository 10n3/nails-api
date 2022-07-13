import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    async createUser(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Get()
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }
}
