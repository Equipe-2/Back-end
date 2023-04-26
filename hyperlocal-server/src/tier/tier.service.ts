import { Injectable } from '@nestjs/common';
import { CreateTierDto } from './dto/create-tier.dto';
import { UpdateTierDto } from './dto/update-tier.dto';
import { TierRepository } from './tier.repository';
import { v4 as uuidv4 } from 'uuid';
import { ITier } from './entities/tier.entity';
import { Exceptions, HandleException } from 'src/utils/exceptions/exceptionHandler';
import { Exception } from 'src/utils/exceptions/exception';

@Injectable()
export class TierService {
  constructor(private readonly tierRepository: TierRepository) {}

  async create(createTierDto: CreateTierDto): Promise<ITier>{
    const tierId  = uuidv4()
    const tierData = {...createTierDto, id: tierId }
    return await this.tierRepository.create(tierData);
  }

  async findAll() {
    const allTiers = await this.tierRepository.findAll();
    return allTiers
  }

  async findOne(id: string) {
    const uniqueTier = await this.tierRepository.findById(id);
    return uniqueTier
  }

  async update( updateTierDto: UpdateTierDto) {
    const updatedTier = await this.tierRepository.update(updateTierDto)
    return updatedTier
  }

  async remove(id: string): Promise<ITier> {
    const deletedTier  = await this.tierRepository.remove(id)
    return deletedTier
  }
}
