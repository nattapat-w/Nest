import { CreateUserDto } from '../model/user.model';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from 'typeorm';
@Entity('tbl_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @BeforeInsert()
  updateFromDto(dto: CreateUserDto) {
    if (dto) {
      this.username = dto.username;
      this.password = dto.password;
      this.email = dto.email;
    }
  }
}
