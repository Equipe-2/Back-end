import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { v4 as uuidv4 } from 'uuid';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async create(createCustomerDto: CreateCustomerDto, userId: string) {
    const customerId = uuidv4()
    const currentDate = new Date();
    const customerData = {...createCustomerDto, id: customerId, startDate: currentDate, franchiseeId: userId}
    const createdCustomer = await this.customerRepository.create(customerData);
    return createdCustomer
  }

  async findAll(userId: string) {
    const allCustomers = await this.customerRepository.findAll(userId)
    return allCustomers
  }

  async findOne(id: string) {
    const uniqueCustomer = await this.customerRepository.findById(id);
    return uniqueCustomer;
  }

  async update( updateCustomerDto: UpdateCustomerDto) {
    const updatedCustomer = await this.customerRepository.update(updateCustomerDto);
    return updatedCustomer
  }

  async remove(id: string) {
    const deletedCustomer = await this.customerRepository.remove(id)
    return deletedCustomer;
  }
}
