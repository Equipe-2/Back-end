import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HandleException } from 'src/utils/exceptions/exceptionHandler';
import { userLogged } from 'src/utils/decorators/user-logged.decorator';
import { IUser } from 'src/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('customer')
@ApiTags('Customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async create(@userLogged() userLogged: IUser, @Body() createCustomerDto: CreateCustomerDto) {
    try {
      console.log(userLogged)
      const createdCustomer = await this.customerService.create(createCustomerDto, userLogged.id)
      return createdCustomer
    } catch (error) {
      HandleException(error)
    }
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async findAll(@userLogged() userLogged: IUser) {
    try {
      const allCustomers = await this.customerService.findAll(userLogged.id);
      return allCustomers
    } catch (error) {
      HandleException(error)
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async findOne(@Param('id') id: string) {
    try {
      const uniqueCustomer = await this.customerService.findOne(id)
      return uniqueCustomer
    } catch (error) {
      HandleException(error)
    }
  }

  @Patch()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async update( @Body() updateCustomerDto: UpdateCustomerDto) {
    try {
      const updatedCustomer = await this.customerService.update(updateCustomerDto);
      return updatedCustomer
    } catch (error) {
      HandleException(error)
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    try {
      await this.customerService.remove(id)
      return "Customer deleted successfully"
    } catch (error) {
      HandleException(error)
    }
  }
}
