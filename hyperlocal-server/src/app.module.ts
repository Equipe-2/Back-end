import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, UserModule]
})
export class AppModule {}
