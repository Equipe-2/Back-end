import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { DatabaseModule } from 'src/prisma/prisma.module';
import { ClientRepository } from './client.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[DatabaseModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ClientController],
  providers: [ClientService, ClientRepository]
})
export class ClientModule {}
