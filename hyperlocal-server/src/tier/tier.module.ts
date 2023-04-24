import { Module } from '@nestjs/common';
import { TierService } from './tier.service';
import { TierController } from './tier.controller';
import { TierRepository } from './tier.repository';
import { DatabaseModule } from 'src/prisma/prisma.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TierController],
  providers: [TierService, TierRepository]
})
export class TierModule {}
