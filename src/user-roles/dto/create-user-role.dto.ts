import {ApiProperty} from "@nestjs/swagger";

export class CreateUserRoleDto {

    @ApiProperty({ example: 'Admin', description: 'User role' })
    readonly name: string;

    @ApiProperty({ example: 'Administrator', description: 'Role description' })
    readonly description: string;

}