import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, HttpCode, Post, Req, UseGuards} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {User} from "../user/user.model";
import RequestWithUser from "./request-with-user.interface";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({ summary: 'Registration' })
    @ApiResponse({ status: 201, type: User })
    @Post('sign-up')
    async signUp(@Body() dto: CreateUserDto) {
        return await this.authService.signUp(dto);
    }

    @ApiOperation({ summary: 'Login' })
    @ApiResponse({ status: 200, type: User })
    @HttpCode(200)
    @Post('sign-in')
    async signIn(@Req() request: RequestWithUser, @Body() dto: CreateUserDto) {
        return await this.authService.signIn(dto);
    }


}
