import {Body, Controller, Get, Param, Post} from '@nestjs/common';
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
    @Get('/:name')
    async getClientByName(@Param('name') name : string) {
        return await this.clientService.getClientByName(name);
    }

}
