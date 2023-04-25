import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Exception } from "src/utils/exceptions/exception";
import { Exceptions } from "src/utils/exceptions/exceptionHandler";


@Injectable()
export class ClientRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(){
        try {
            
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
