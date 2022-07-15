import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Sign in'})
    @ApiResponse({ status: 201, type: String })
    @Post('/signin')
    async signin(@Body() userDto: CreateUserDto) {
        return await this.authService.signin(userDto);
    }

    @ApiOperation({summary: 'Sign up'})
    @ApiResponse({ status: 201, type: String })
    @Post('/signup')
    async signup(@Body() userDto: CreateUserDto) {
        return await this.authService.signup(userDto);
    }

}
