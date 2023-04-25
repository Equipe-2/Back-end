import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TierService } from './tier.service';
import { CreateTierDto } from './dto/create-tier.dto';
import { UpdateTierDto } from './dto/update-tier.dto';
import { HandleException } from 'src/utils/exceptions/exceptionHandler';
import { ITier } from './entities/tier.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('tier')
@ApiTags('Tier')
export class TierController {
  constructor(private readonly tierService: TierService) {}

  @Post()
  async create(@Body() createTierDto: CreateTierDto): Promise<ITier> {
    try {
      const createdTier = await this.tierService.create(createTierDto);
      return createdTier
    } catch (error) {
      HandleException(error)
    }
  }

  @Get()
  async findAll() {
    try {
      const allTiers = await this.tierService.findAll();
      return allTiers
    } catch (error) {
      HandleException(error)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tierService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTierDto: UpdateTierDto) {
    return this.tierService.update(id, updateTierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tierService.remove(id);
  }
}
