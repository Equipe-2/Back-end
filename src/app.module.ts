import { Module } from '@nestjs/common';
import { ProductsModule } from '../src/modules/products/products.module';
import { PrismaService } from './database/prisma.service';



@Module({
  imports: [ProductsModule, PrismaService],
  controllers: [],
  providers: [],
})
export class AppModule {}
