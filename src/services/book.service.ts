import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { CreateBookDto } from 'src/model/book.model';
import { IBookService } from 'src/repository/book.repository';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class BookService implements IBookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create();
    newBook.updateFromDto(createBookDto);
    try {
      return await this.bookRepository.save(newBook);
    } catch (error) {
      throw new BadRequestException(`Unable to create book: ${error.message}`);
    }
  }
  async findAllBook(): Promise<Book[]> {
    const books = await this.bookRepository.find();
    return books;
  }
  async findBookById(id: number): Promise<Book | undefined> {
    const book = await this.bookRepository.findOne({ where: { id: id } });

    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }
  async deleteBookById(id: number): Promise<DeleteResult> {
    return await this.bookRepository.delete({ id: id });
  }
}
