import {ApiProperty} from "@nestjs/swagger";

export class CreateEmployeeDto {

    @ApiProperty({ example: 'Alex', description: 'Employee name' })
    readonly name: string;

    @ApiProperty({ example: 'Smith', description: 'Employee surname' })
    readonly surname: string;

    @ApiProperty({ example: 'Nail master', description: 'Employee position' })
    readonly position: string;

    @ApiProperty({ example: '+380666666666', description: 'Employee telephone number' })
    readonly tel_number: string;

    @ApiProperty({ example: 'male/female', description: 'Employee sex' })
    readonly sex: string;

    @ApiProperty({ example: '2002-07-08', description: 'Employee birthday' })
    readonly birthday: object;

    @ApiProperty({ example: 'Client prefers...', description: 'Comment to client desires' })
    readonly comment: string;


}