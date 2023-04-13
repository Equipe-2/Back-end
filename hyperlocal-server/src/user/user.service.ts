import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';
import { UserRepository } from './user.repository';
import { IUser } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const userId = uuidv4();
    const hashedPassword = await hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;
    const user = { ...createUserDto, id: userId };
    const createdUser = await this.userRepository.create(user);
    return createdUser;
  }

  async findAll(): Promise<IUser[]> {
    const allUsers = await this.userRepository.findAll()
    return allUsers;
  }

  findOne(id: string) {
    return;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return;
  }

  remove(id: string) {
    return;
  }
}
