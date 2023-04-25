import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TierModule } from './tier/tier.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, TierModule, ClientModule],
})
export class AppModule {}
