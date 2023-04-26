import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    const productExists = await this.prisma.product.findFirst({
      where: {
        name: data.name,
      },
    });

    if (productExists) {
      throw new Error('Prduct already exists');
    }
    data = {...data, id: uuidv4()}
    const product = await this.prisma.product.create({
      data,
    });
    return product;
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async update(productId: string, data: UpdateProductDto) {
    const productExists = this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productExists) {
      throw new Error('Product does not exist');
    }

    return await this.prisma.product.update({
      data,
      where: {
        id: productId
      },
    });
  }
  async delete(productId: string) {
    return await this.prisma.product.delete({
      where: {
        id: productId
      },
    });
  }
}
