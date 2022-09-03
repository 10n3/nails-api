import {ApiProperty} from "@nestjs/swagger";
import {Column, DataType} from "sequelize-typescript";

export class CreateServiceDto {

    @ApiProperty({ example: 'Removal, cleaning, coating', description: 'Service name' })
    name: string;

    @ApiProperty({ example: '120', description: 'Time spent on service' })
    duration: number;

    @ApiProperty({ example: '400', description: 'Price that client may pay' })
    price: number;

    @ApiProperty({ example: 'Hardware manicure', description: 'Service description' })
    description: string;

}