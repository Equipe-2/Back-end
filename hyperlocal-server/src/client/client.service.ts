import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { v4 as uuidv4 } from 'uuid';
import { ClientRepository } from './client.repository';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async create(createClientDto: CreateClientDto, userId: string) {
    const clientId = uuidv4()
    const currentDate = new Date();
    const clientData = {...createClientDto, id: clientId, startDate: currentDate, franchiseeId: userId}
    const createdClient = await this.clientRepository.create(clientData);
    return createdClient
  }

  async findAll(userId: string) {
    const allClients = await this.clientRepository.findAll(userId)
    return allClients
  }

  async findOne(id: string) {
    const uniqueClient = await this.clientRepository.findById(id);
    return uniqueClient;
  }

  async update( updateClientDto: UpdateClientDto) {
    const updatedClient = await this.clientRepository.update(updateClientDto);
    return updatedClient
  }

  async remove(id: string) {
    const deletedClient = await this.clientRepository.remove(id)
    return deletedClient;
  }
}
