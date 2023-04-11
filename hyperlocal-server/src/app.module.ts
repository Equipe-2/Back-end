import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/prisma.module';
@Module({
  imports: [DatabaseModule]
})
export class AppModule {}
