import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';
import { UserRepository } from './user.repository';
import { IUser } from './entities/user.entity';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionHandler';
import { CreateFranchiseeUserDto } from './dto/create-franchisee-user-dto';
import { generateRandomPassword } from 'src/utils/password-generator/password-generator';

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

  async createFranchisee(createFranchiseeDto: CreateFranchiseeUserDto){
    const userId = uuidv4();
    const userPassoword = await generateRandomPassword(6);
    const hashedPassword = await hash(userPassoword, 10);
    const userData = {id: userId, password: hashedPassword, name: createFranchiseeDto.name, email: createFranchiseeDto.personalEmail, role: "manager"};
    delete createFranchiseeDto.name
    const franchiseeData = {...createFranchiseeDto, userId: userId};
    const createdUser = await this.userRepository.createFranchisee(userData, franchiseeData)
    return createdUser
  }

  async findAll(){
    const allUsers = await this.userRepository.findAll()
    return allUsers;
  }

  async findOne(id: string): Promise<IUser> {
    const uniqueUser = this.userRepository.findOne(id)
    return uniqueUser;
  }

  async findByEmail(userEmail: string): Promise<IUser | null> {
    const foundUser = this.userRepository.findByEmail(userEmail);
    return foundUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const updatedUser = await this.userRepository.update(id, updateUserDto);
    return updatedUser;
  }

  async remove(id: string): Promise<IUser> {
    const deletedUser = await this.userRepository.remove(id);
    return deletedUser
  }
}
