import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiTags } from '@nestjs/swagger';



@Controller('products')
@ApiTags('Products')
export class ProductsController {
  
  constructor(private readonly productsService: ProductsService) {}
   
    @Post()
      async create(@Body() data: CreateProductDto) {
        return this.productsService.create(data);    
    }

    @Get()
      async findAll(){
        return this.productsService.findAll()
      }
      
    @Patch(":id")
      async update(@Param("id") id: string ,@Body() data: UpdateProductDto){
        return this.productsService.update(id, data)
      }
    @Delete(":id")
      async delete(@Param("id") id: string){
        return this.productsService.delete(id)
      }
  }

