import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HandleException } from 'src/utils/exceptions/exceptionHandler';
import { userLogged } from 'src/utils/decorators/user-logged.decorator';
import { IUser } from 'src/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('client')
@ApiTags('Client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async create(@userLogged() userLogged: IUser, @Body() createClientDto: CreateClientDto) {
    try {
      console.log(userLogged)
      const createdClient = await this.clientService.create(createClientDto, userLogged.id)
      return createdClient
    } catch (error) {
      HandleException(error)
    }
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async findAll(@userLogged() userLogged: IUser) {
    try {
      const allClients = await this.clientService.findAll(userLogged.id);
      return allClients
    } catch (error) {
      HandleException(error)
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async findOne(@Param('id') id: string) {
    try {
      const uniqueClient = await this.clientService.findOne(id)
      return uniqueClient
    } catch (error) {
      HandleException(error)
    }
  }

  @Patch()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async update( @Body() updateClientDto: UpdateClientDto) {
    try {
      const updatedClient = await this.clientService.update(updateClientDto);
      return updatedClient
    } catch (error) {
      HandleException(error)
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    try {
      await this.clientService.remove(id)
      return "Client deleted successfully"
    } catch (error) {
      HandleException(error)
    }
  }
}
