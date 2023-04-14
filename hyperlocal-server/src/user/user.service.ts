import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';
import { UserRepository } from './user.repository';
import { IUser } from './entities/user.entity';
import { CreateFranchiseeUserDto } from './dto/create-franchisee-user-dto';
import { generateRandomPassword } from 'src/utils/password-generator/password-generator';
import { IFranchisee } from './entities/franchisee-user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const userId = uuidv4();
    const hashedPassword = await hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;
    const user = { ...createUserDto, id: userId };
    const createdUser = await this.userRepository.create(user);
    delete createdUser.password;
    return createdUser;
  }

  async createFranchisee(createFranchiseeDto: CreateFranchiseeUserDto) {
    const userId = uuidv4();
    const userPassoword = await generateRandomPassword(6);
    const hashedPassword = await hash(userPassoword, 10);
    const userData = {
      id: userId,
      password: hashedPassword,
      name: createFranchiseeDto.name,
      email: createFranchiseeDto.personalEmail,
      role: 'franchisee',
    };
    delete createFranchiseeDto.name;
    const franchiseeData = { ...createFranchiseeDto, userId: userId };
    const createdUser = await this.userRepository.createFranchisee(
      userData,
      franchiseeData,
    );
    return createdUser;
  }

  async findAll() {
    const allUsers = await this.userRepository.findAll();
    return allUsers;
  }

  async findOne(id: string): Promise<IUser> {
    const uniqueUser = this.userRepository.findOne(id);
    return uniqueUser;
  }

  async findByEmail(userEmail: string): Promise<IUser> {
    const foundUser = this.userRepository.findByEmail(userEmail);
    return foundUser;
  }

  async findFranchiseeByEmail(userEmail: string): Promise<IFranchisee> {
    const foundFranchisee =
      this.userRepository.findFranchiseeByEmail(userEmail);
    return foundFranchisee;
  }

  async findFranchiseeByCpnj(franchiseeCnpj: string): Promise<IFranchisee> {
    const foundFranchisee =
      this.userRepository.findFranchiseeByCpnj(franchiseeCnpj);
    return foundFranchisee;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const updatedUser = await this.userRepository.update(id, updateUserDto);
    return updatedUser;
  }

  async remove(id: string): Promise<IUser> {
    const deletedUser = await this.userRepository.remove(id);
    return deletedUser;
  }
}
