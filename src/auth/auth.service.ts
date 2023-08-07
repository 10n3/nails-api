import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {CreateUserDto} from "../user/dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
                private jwtService: JwtService) {}

    async signUp(dto: CreateUserDto) {

        const hashedPassword = await bcrypt.hash(dto.password, 10);

        const existUser = await this.userService.getUserByEmail(dto.email);

        if(Object.keys(existUser).length !== 0) {
            throw new HttpException( 'User with this email is already exist', HttpStatus.BAD_REQUEST);
        }

        const newUser = await this.userService.createUser({
            ...dto,
            password: hashedPassword,
        });
        newUser.password = undefined;

        return newUser;
    }

    async signIn(dto: CreateUserDto) {
        const existUser = await this.userService.getUserByEmail(dto.email);

        if(Object.keys(existUser).length === 0) {
            throw new HttpException('User with this email is not exist', HttpStatus.NOT_FOUND);
        }

        await this.verifyPassword(dto.password, existUser.password);
        existUser.password = undefined;

        const payload = { id: existUser.id, email: existUser.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        }

    }

    async verifyPassword(plainTextPassword: string, hashedPassword: string) {
        const isPasswordMatching = await bcrypt.compare(plainTextPassword, hashedPassword);
        if(!isPasswordMatching) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }


}
