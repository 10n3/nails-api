import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {CreateClientDto} from "./dto/create-client.dto";
import {ClientService} from "./client.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Client} from "./client.model";

@ApiTags('Client')
@Controller('client')
export class ClientController {

    constructor(private clientService: ClientService) {}

    @ApiOperation({ summary: 'Client creation' })
    @ApiResponse({ status: 201, type: Client })
    @Post()
    async createClient(@Body() dto: CreateClientDto) {
        return this.clientService.createClient(dto);
    }

    @ApiOperation({ summary: 'Get all clients' })
    @ApiResponse({status: 200, type: [Client]})
    @Get()
    async getAllClients() {
        return this.clientService.getAllClients();
    }

    @ApiOperation({ summary: 'Get client by name' })
    @ApiResponse({status: 200, type: Client})
    @Get('by-name/:name')
    async getClientByName(@Param('name') name : string) {
        return await this.clientService.getClientByName(name);
    }

    @ApiOperation({ summary: 'Get client by tel. number' })
    @ApiResponse({status: 200, type: Client})
    @Get('by-number/:tel_number')
    async getClientByTelNumber(@Param('tel_number') tel_number : string) {
        return await this.clientService.getClientByTelNumber(tel_number);
    }

    @ApiOperation({ summary: 'Update client by tel.number' })
    @ApiResponse({status: 202, type: Boolean})
    @HttpCode(202)
    @Put()
    async updateClientByTelNumber(@Body() dto : CreateClientDto) {
        return await this.clientService.updateClientByTelNumber(dto);
    }


    @ApiOperation({ summary: 'Delete client by tel. number' })
    @ApiResponse({status: 202, type: Client})
    @Delete('/:tel_number')
    async deleteClientByTelNumber(@Param('tel_number') tel_number : string) {
        return await this.clientService.deleteClientByTelNumber(tel_number);
    }
}
