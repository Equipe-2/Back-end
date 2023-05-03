import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { DatabaseModule } from 'src/prisma/prisma.module';
import { CustomerRepository } from './customer.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[DatabaseModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository]
})
export class CustomerModule {}
