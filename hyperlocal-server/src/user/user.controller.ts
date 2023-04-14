import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { Exceptions, HandleException } from 'src/utils/exceptions/exceptionHandler';
import { IUser } from './entities/user.entity';
import { Exception } from 'src/utils/exceptions/exception';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    try {
      const createdUser = await this.userService.create(createUserDto);
      return createdUser
    } catch (error) {
      HandleException(error);
    }
  }

  @Get()
  async findAll(): Promise<IUser[]> {
    try {
      const allUsers = await this.userService.findAll();
      return allUsers
    } catch (error) {
      HandleException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') userId: string): Promise<IUser> {
    try {
      const uniqueUser = await this.userService.findOne(userId);
      if(!uniqueUser){
        throw new Exception(Exceptions.NotFoundData, "This user could not be found in the database")
      }
      return uniqueUser;
    } catch (error) {
      HandleException(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
    try {
      const uniqueUser = await this.userService.findOne(userId);
      if(!uniqueUser){
        throw new Exception(Exceptions.InvalidData, 'User could not be updated')
      }
    const updatedUser = this.userService.update(userId, updateUserDto);
    return updatedUser;
    } catch (error) {
      HandleException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') userId: string): Promise<String> {
    try {
      const uniqueUser = await this.userService.findOne(userId);
      if(!uniqueUser){
        throw new Exception(Exceptions.InvalidData, 'User could not be deleted')
      }
      await this.userService.remove(userId);
      return 'User deleted successfully';
    } catch (error) {
      HandleException(error);
    }
  }
}
