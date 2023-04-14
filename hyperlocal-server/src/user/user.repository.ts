import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionHandler';
import { IUser } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { IFranchisee} from './entities/franchisee-user.entity';

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

  async createFranchisee( userData: IUser, franchiseeData: IFranchisee) {
    try {
      const createdUser = await this.prisma.user.create({
        data: userData
      });
      await this.prisma.franchisee.create({
        data: franchiseeData
      });
      return createdUser;
    } catch (error) {console.log(error)

      throw new Exception(Exceptions.DatabaseException)
    }
  }

  async findAll(): Promise<IUser[]> {
    try {
      const allUsers = await this.prisma.user.findMany(
        
      );
      return allUsers; 
    } catch (error) {
      throw new Exception(Exceptions.DatabaseException)
    }
  }

  async findOne(userId: string): Promise<IUser> {
    try {
      const uniqueUser = await this.prisma.user.findUnique({
        where: {id: userId},
      });
      return uniqueUser;
    } catch (error) {
      throw new Exception(Exceptions.DatabaseException)
    }
  }

  async findByEmail(userEmail: string): Promise<IUser> {
    try {
      const foundUser = this.prisma.user.findUnique({where: {email: userEmail}});
      return foundUser;
    } catch (error) {
     throw new Exception(Exceptions.DatabaseException); 
    }
  }

  async findFranchiseeByEmail(userEmail: string): Promise<IFranchisee> {
    try {
      const foundFranchisee = this.prisma.franchisee.findUnique({where: {personalEmail: userEmail}});
      return foundFranchisee;
    } catch (error) {
     throw new Exception(Exceptions.DatabaseException); 
    }
  }

  async findFranchiseeByCpnj(franchiseeCnpj: string): Promise<IFranchisee>{
    try {
      const foundFranchisee = this.prisma.franchisee.findUnique({where: {cnpj: franchiseeCnpj}});
      return foundFranchisee;
    } catch (error) {
     throw new Exception(Exceptions.DatabaseException); 
    }
  }

  async update(userId, updateUserDto: UpdateUserDto): Promise<IUser> {
    try {
      const updatedUser = this.prisma.user.update({
        where: {id: userId},
        data: updateUserDto,
      })
      return updatedUser
    } catch (error) {
      
      throw new Exception(Exceptions.DatabaseException)
    }
  }

  async remove(userId: string): Promise<IUser> {
    try {
      const deletedUser = this.prisma.user.delete({
        where: {id: userId},
      });
      return deletedUser;
    } catch (error) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }
}
