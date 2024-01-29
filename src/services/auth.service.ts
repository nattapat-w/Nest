import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../model/user.model';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
     // Check if a user with the same username exists
     const existingUsernameUser = await this.userService.findUserByUsername(createUserDto.username);
     if (existingUsernameUser) {
       throw new ConflictException(`Username '${createUserDto.username}' is already in use`);
     }
 
     // Check if a user with the same email exists
     const existingEmailUser = await this.userService.findUserByEmail(createUserDto.email);
     if (existingEmailUser) {
       throw new ConflictException(`Email '${createUserDto.email}' is already in use`);
     }
     
    const newUser = await this.userService.createUser(createUserDto);
    if (!newUser) {
      throw new BadRequestException(`Unable to create user`);
    }
    return newUser;
  }

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.userService.findUserByUsername(username);
    
    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new UnauthorizedException("wrong password")
    }
    const payload = { sub: user.id, username: user.username };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
