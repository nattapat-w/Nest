import { DataSource, Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../user.repository';

@Injectable()
export class UserRepository
  extends Repository<User>
  implements IUserRepository
{
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async findByUsername(username: string): Promise<User> {
    return this.findOne({ where: { username: username } });
  }
}
