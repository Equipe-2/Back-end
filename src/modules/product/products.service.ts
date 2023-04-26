import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: ProductDto) {
    const productExists = await this.prisma.product.findFirst({
      where: {
        name: data.name,
      },
    });

    if (productExists) {
      throw new Error('Prduct already exists');
    }
    const product = await this.prisma.product.create({
      data,
    });
    return product;
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async update(id: string, data: ProductDto) {
    const productExists = this.prisma.product.findUnique({
      where: { id: id },
    });

    if (!productExists) {
      throw new Error('Product does not exist');
    }

    return await this.prisma.product.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    return await this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
