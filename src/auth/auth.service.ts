import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';
import {User} from "../users/users.model";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }

    async signin(userDto: CreateUserDto){
        const user = await this.validateUser(userDto);

        return this.generateToken(user);
    }

    async signup(userDto: CreateUserDto){
        const candidate = this.userService.getUserByEmail(userDto.email);

        if(!candidate) {
            throw new HttpException('User with this email is already exist', HttpStatus.BAD_REQUEST);
        }

        const hashedPassword = await bcrypt.hash(userDto.password, +process.env.HASH_NUM);

        const user = await this.userService.createUser({ ...userDto, password: hashedPassword });

        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = { id: user.id, email: user.email,  roles: user.roles };

        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);

        if( user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({ message: 'Incorrect email or password' });
    }
}
