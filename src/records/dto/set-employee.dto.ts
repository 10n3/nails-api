import {ApiProperty} from "@nestjs/swagger";

export class SetEmployeeDto {

    @ApiProperty({ example: '5', description: 'Record ID' })
    readonly id: number;

    @ApiProperty({ example: 'Віка', description: 'Employee name' })
    readonly employee_name: string;

}