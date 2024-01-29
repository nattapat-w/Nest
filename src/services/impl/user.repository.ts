import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../..//model/user.model';

export interface IUserService {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  findAllUser(): Promise<User[]>;
  findUserByUsername(username: string): Promise<User>;
  findUserByEmail(email: string): Promise<User>
}
