import { CreateBookDto } from '../../model/book.model';
import { Book } from '../../entities/book.entity';
import { DeleteResult } from 'typeorm';

export interface IBookService {
  createBook(createBookDto: CreateBookDto): Promise<Book>;
  findAllBook(): Promise<Book[]>;
  findBookById(id: number): Promise<Book | undefined>;
  deleteBookById(id: number): Promise<DeleteResult>;
}
