import {ApiProperty} from "@nestjs/swagger";

export class CreateClientDto {

    @ApiProperty({ example: 'Alex', description: 'Client name' })
    readonly name: string;

    @ApiProperty({ example: 'Smith', description: 'Client surname' })
    readonly surname: string;

    @ApiProperty({ example: '+380666666666', description: 'Client telephone number' })
    readonly tel_number: string;

    @ApiProperty({ example: 'male/female', description: 'Client sex' })
    readonly sex: string;

    @ApiProperty({ example: 'example@gmail.com', description: 'Mail address' })
    readonly email: string;

    @ApiProperty({ example: '2002-07-08', description: 'Client birthday' })
    readonly birthday: object;

    @ApiProperty({ example: 'Client prefers...', description: 'Comment to client desires' })
    readonly comment: string;


}