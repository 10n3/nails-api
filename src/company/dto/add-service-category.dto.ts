import {ApiProperty} from "@nestjs/swagger";


export class AddServiceCategoryDto {

    @ApiProperty({ example: 'KAIF beauty', description: 'Company name to that you want to add service category' })
    companyName: string;

    @ApiProperty({ example: 'Brows', description: 'Category that u want to add to current company' })
    serviceCategoryName: string;
}