import {ApiProperty} from "@nestjs/swagger";

export class SetRoleDto {

    @ApiProperty({ example: 'example@gmail.com', description: 'User email' })
    readonly email: string;

    @ApiProperty({ example: 'Admin', description: 'User role' })
    readonly role: string;

}