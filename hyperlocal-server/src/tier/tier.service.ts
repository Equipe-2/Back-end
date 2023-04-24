import { Injectable } from '@nestjs/common';
import { CreateTierDto } from './dto/create-tier.dto';
import { UpdateTierDto } from './dto/update-tier.dto';
import { TierRepository } from './tier.repository';

@Injectable()
export class TierService {
  constructor(private readonly tierRepository: TierRepository) {}

  create(createTierDto: CreateTierDto) {
    return 
  }

  findAll() {
    return 
  }

  findOne(id: number) {
    return 
  }

  update(id: number, updateTierDto: UpdateTierDto) {
    return 
  }

  remove(id: number) {
    return 
  }
}
