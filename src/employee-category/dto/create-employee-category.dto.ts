import {ApiProperty} from "@nestjs/swagger";


export class CreateEmployeeCategoryDto {
    @ApiProperty({example: 'Nail master', description: 'Employee category name'})
    readonly name: string;
}