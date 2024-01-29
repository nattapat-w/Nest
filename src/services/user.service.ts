import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/impl/user.repository';
import { IUserService } from '../services/impl/user.repository';
import { CreateUserDto } from '../model/user.model';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create();
    newUser.updateFromDto(createUserDto);
    
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(newUser.password, salt);

    newUser.password = hash
    
    try {
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new BadRequestException(`Unable to create user: ${error.message}`);
    }
  }

  async findUserByUsername(username: string): Promise<User> {
    const user = this.userRepository.findByUsername(username);
    return user;
  }
  async findUserByEmail(email: string): Promise<User> {
    const user = this.userRepository.findByEmail(email);
    return user;
  }
  async findAllUser(): Promise<User[]> {
    const users = this.userRepository.find()
    return users
  }
}
