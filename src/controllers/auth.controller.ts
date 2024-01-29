import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @HttpCode(HttpStatus.OK)
  @Post("register")
  signUp(@Body() createUserDto: CreateUserDto){
    console.log("create User");
    return this.authService.signUp(createUserDto)
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    console.log("login");
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}