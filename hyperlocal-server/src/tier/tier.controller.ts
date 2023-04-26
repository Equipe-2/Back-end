import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TierService } from './tier.service';
import { CreateTierDto } from './dto/create-tier.dto';
import { UpdateTierDto } from './dto/update-tier.dto';
import { Exceptions, HandleException } from 'src/utils/exceptions/exceptionHandler';
import { ITier } from './entities/tier.entity';
import { ApiTags } from '@nestjs/swagger';
import { Exception } from 'src/utils/exceptions/exception';

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
  async findOne(@Param('id') id: string) {
    try {
      const uniqueTier = await this.tierService.findOne(id);
      return uniqueTier
    } catch (error) {
      HandleException(error)
    }
  }

  @Patch()
  async update(@Body() updateTierDto: UpdateTierDto) {
try {
  const updatedTier = await this.tierService.update(updateTierDto);
    return updatedTier
} catch (error) {
  HandleException(error)
}
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.tierService.remove(id);
      return "Tier deleted successfully"
    } catch (error) {
      HandleException(error)
    }
  }
}
