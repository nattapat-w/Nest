import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;
}
