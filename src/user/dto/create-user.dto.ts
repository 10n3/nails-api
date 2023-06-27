import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ example: 'example@gmail.com', description: 'User email' })
    readonly email: string;

    @ApiProperty({ example: 'password1234', description: 'User password' })
    readonly password: string;

}