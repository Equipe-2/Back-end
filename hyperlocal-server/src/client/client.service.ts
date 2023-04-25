import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { v4 as uuidv4 } from 'uuid';
import { ClientRepository } from './client.repository';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async create(createClientDto: CreateClientDto) {
    const clientId = uuidv4()
    const currentDate = new Date();
    const clientData = {...createClientDto, id: clientId, startDate: currentDate}
    const createdClient = await this.clientRepository.create(clientData);
    return createdClient
  }

  async findAll() {
    const allClients = await this.clientRepository.findAll()
    return allClients
  }

  async findOne(id: string) {
    const uniqueClient = await this.clientRepository.findById(id);
    return uniqueClient;
  }

  async update( updateClientDto: UpdateClientDto) {
    return 
  }

  async remove(id: string) {
    return `This action removes a #${id} client`;
  }
}
