import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TierModule } from './tier/tier.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, TierModule],
})
export class AppModule {}
