import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TierModule } from './tier/tier.module';
import { CustomerModule } from './customer/customer.module';
import { ProductsModule } from './product/products.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),DatabaseModule, UserModule, AuthModule, TierModule, CustomerModule, ProductsModule, EmailModule],
})
export class AppModule {}
