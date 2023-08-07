import {ApiProperty} from "@nestjs/swagger";

export class GetPeriodDto {

    @ApiProperty({ example: '2022-09-19', description: 'First date' })
    readonly date1: string;

    @ApiProperty({ example: '2022-10-19', description: 'Second date', required: false })
    readonly date2: string;

}