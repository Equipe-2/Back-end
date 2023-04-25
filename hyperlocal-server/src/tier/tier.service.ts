import { Injectable } from '@nestjs/common';
import { CreateTierDto } from './dto/create-tier.dto';
import { UpdateTierDto } from './dto/update-tier.dto';
import { TierRepository } from './tier.repository';
import { v4 as uuidv4 } from 'uuid';
import { ITier } from './entities/tier.entity';

@Injectable()
export class TierService {
  constructor(private readonly tierRepository: TierRepository) {}

  async create(createTierDto: CreateTierDto): Promise<ITier>{
    const tierId  = uuidv4()
    const tierData = {...createTierDto, id: tierId }
    return await this.tierRepository.create(tierData);
  }

  findAll() {
    return 
  }

  findOne(id: string) {
    return 
  }

  update(id: string, updateTierDto: UpdateTierDto) {
    return 
  }

  remove(id: string) {
    return 
  }
}
