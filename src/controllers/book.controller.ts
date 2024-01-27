import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateBookDto } from 'src/model/book.model';
import { BookService } from 'src/services/book.service';

@Controller('book')
export class BookController{
  constructor(private bookService: BookService){}
  @Get()
  async getAllBook(){
    return this.bookService.findAllBook()
  }
  @Get(":id")
  async getBookById(@Param("id") id: number) {
    return this.bookService.findBookById(id)
  }
  @Post()
  async createBook(@Body() createBookDto: CreateBookDto){
    return this.bookService.createBook(createBookDto)
  }
  @Delete(":id")
  async deleteBookById(@Param("id") id: number) {
    return this.bookService.deleteBookById(id)
  }
}
