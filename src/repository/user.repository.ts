import { User } from "src/entities/user.entity";

export interface IUserRepository {
  findByUsername(username: string): Promise<User>;
}