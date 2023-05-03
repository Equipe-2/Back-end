import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { DatabaseModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [DatabaseModule, EmailModule ,PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [UserController],
  providers: [UserService, UserRepository,],
})
export class UserModule {}
