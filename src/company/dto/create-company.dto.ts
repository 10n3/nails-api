import {ApiProperty} from "@nestjs/swagger";

export class CreateCompanyDto {

    @ApiProperty({ example: 'Kaif beauty', description: 'Company name' })
    name: string;

    @ApiProperty({ example: '+380666666666', description: 'Company/Owner telephone number' })
    tel_number: string;

    @ApiProperty({ example: 'example@gmail.com', description: 'Email address' })
    email: string;

    @ApiProperty({ example: 'Ukraine', description: 'Company country' })
    country: string;

    @ApiProperty({ example: 'Mariupol', description: 'City' })
    city: string;

    @ApiProperty({ example: 'Зелінського, 100', description: 'Company address' })
    address: string;

    @ApiProperty({ example: 'Our company is...', description: 'Company description' })
    description: string;


}