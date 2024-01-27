import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/impl/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async findUserByUsername(username: string) {
    const user = this.userRepository.findByUsername(username)
    return user
  }
}
