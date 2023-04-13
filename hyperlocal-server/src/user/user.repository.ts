import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionHandler';
import { IUser } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserData: IUser): Promise<IUser> {
    try {
      const createdUser = await this.prisma.user.create({
        data: createUserData,
      });
      return createdUser;
    } catch (error) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }
}
