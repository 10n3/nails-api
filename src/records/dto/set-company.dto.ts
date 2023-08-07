import {ApiProperty} from "@nestjs/swagger";

export class SetCompanyDto {

    @ApiProperty({ example: '5', description: 'Record ID' })
    readonly id: number;

    @ApiProperty({ example: 'KAIF', description: 'Company name' })
    readonly company_name: string;

}