import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Exception } from "src/utils/exceptions/exception";
import { Exceptions } from "src/utils/exceptions/exceptionHandler";
import { IClient } from "./entities/client.entity";
import { UpdateClientDto } from "./dto/update-client.dto";


@Injectable()
export class ClientRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(clientData: IClient){
        try {
            const createdClient = await this.prisma.client.create({
                data: clientData
            })
            return createdClient
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async findAll(){
        try {
            const allClients = await this.prisma.client.findMany()
            return allClients
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async findById(clientId: string){
        try {
            const uniqueClient = await this.prisma.client.findUnique({
                where: {id:clientId}
            })
            return uniqueClient
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async update(updateClientDto:UpdateClientDto){
        try {
            const updatedClient = await this.prisma.client.update({
                where: {id: updateClientDto.id},
                data: updateClientDto
            })
            return updatedClient
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async remove(clientId: string ){
        try {
            const deletedClient = this.prisma.client.delete({
                where: {id: clientId}
            })
            return deletedClient
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }
}
