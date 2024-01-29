import { DataSource, Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async findByUsername(username: string): Promise<User> {
    return this.findOne({ where: { username: username } });
  }
  async findByEmail(email: string): Promise<User> {
    return this.findOne({ where: { email: email } });
  }
}
