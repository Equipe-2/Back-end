import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/product/products.module';


@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
