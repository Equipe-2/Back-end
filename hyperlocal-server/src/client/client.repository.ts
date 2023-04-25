import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Exception } from "src/utils/exceptions/exception";
import { Exceptions } from "src/utils/exceptions/exceptionHandler";
import { IClient } from "./entities/client.entity";


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
            
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async findById(){
        try {
            
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async update(){
        try {
            
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async remove(){
        try {
            
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }
}
