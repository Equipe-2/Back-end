import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiTags } from '@nestjs/swagger';
import { HandleException } from 'src/utils/exceptions/exceptionHandler';

@Controller('client')
@ApiTags('Client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    try {
      const createdClient = await this.clientService.create(createClientDto)
      return createdClient
    } catch (error) {
      HandleException(error)
    }
  }

  @Get()
  async findAll() {
    try {
      const allClients = await this.clientService.findAll();
      return allClients
    } catch (error) {
      HandleException(error)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const uniqueClient = await this.clientService.findOne(id)
      return uniqueClient
    } catch (error) {
      HandleException(error)
    }
  }

  @Patch()
  async update( @Body() updateClientDto: UpdateClientDto) {
    try {
      const updatedClient = await this.clientService.update(updateClientDto);
      return updatedClient
    } catch (error) {
      HandleException(error)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.clientService.remove(id)
      return "Client deleted successfully"
    } catch (error) {
      HandleException(error)
    }
  }
}
