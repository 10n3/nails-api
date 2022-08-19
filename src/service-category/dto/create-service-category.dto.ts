import {ApiProperty} from "@nestjs/swagger";


export class CreateServiceCategoryDto {
    @ApiProperty({example: 'Brows', description: 'Service name'})
    readonly name: string;
}