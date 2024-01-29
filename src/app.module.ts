import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { AuthModule } from './module/auth.module';
import { UserModule } from './module/user.module';
import { BookModule } from './module/book.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig()),
    AuthModule,
    UserModule,
    BookModule,
  ],
})
export class AppModule {}
