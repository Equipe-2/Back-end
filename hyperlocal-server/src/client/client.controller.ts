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
  findAll() {
    try {
      
    } catch (error) {
      HandleException(error)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      
    } catch (error) {
      HandleException(error)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    try {
      
    } catch (error) {
      HandleException(error)
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      
    } catch (error) {
      HandleException(error)
    }
  }
}
