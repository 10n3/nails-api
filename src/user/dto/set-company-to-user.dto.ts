import {ApiProperty} from "@nestjs/swagger";

export class SetCompanyToUserDto {

    @ApiProperty({ example: 'example@gmail.com', description: 'User email' })
    readonly email: string;

    @ApiProperty({ example: 'Kaif beauty', description: 'User company' })
    readonly companies: string;

}