import { CreateBookDto } from 'src/model/book.model';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  price: number;

  @BeforeInsert()
  updateFromDto(dto: CreateBookDto) {
    if (dto) {
      this.title = dto.title;
      this.author = dto.author;
      this.price = dto.price;
    }
  }
}
