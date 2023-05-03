import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Exception } from "src/utils/exceptions/exception";
import { Exceptions } from "src/utils/exceptions/exceptionHandler";
import { ICustomer } from "./entities/customer.entity";
import { UpdateCustomerDto } from "./dto/update-customer.dto";


@Injectable()
export class CustomerRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(customerData: ICustomer){
        try {
            const createdCustomer = await this.prisma.customer.create({
                data: customerData
            })
            return createdCustomer
        } catch (error) {
            console.log(error)
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async findAll(userId: string){
        try {
            const allCustomers = await this.prisma.customer.findMany({
                where:{franchiseeId: userId}
            })
            return allCustomers
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async findById(customerId: string){
        try {
            const uniqueCustomer = await this.prisma.customer.findUnique({
                where: {id:customerId}
            })
            return uniqueCustomer
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async update(updateCustomerDto:UpdateCustomerDto){
        try {
            const updatedCustomer = await this.prisma.customer.update({
                where: {id: updateCustomerDto.id},
                data: updateCustomerDto
            })
            return updatedCustomer
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async remove(customerId: string ){
        try {
            const deletedCustomer = this.prisma.customer.delete({
                where: {id: customerId}
            })
            return deletedCustomer
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }
}
