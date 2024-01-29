import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../model/user.model';

export interface IAuthService {
  signUp(createUserDto: CreateUserDto): Promise<User>;
  signIn(username: string, pass: string): Promise<any>;
}
