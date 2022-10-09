import {ApiProperty} from "@nestjs/swagger";

export class CreateRecordDto {

    @ApiProperty({ example: '10:35', description: 'Record time' })
    readonly time: string;

    @ApiProperty({ example: '10.10.2022', description: 'Record date', required: false })
    readonly date: string;

    @ApiProperty({ example: 'Client prefers...', description: 'Comment to record' })
    readonly comment: string;


}