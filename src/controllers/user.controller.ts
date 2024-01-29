import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController{
  constructor(private userService: UserService){}

  @UseGuards(AuthGuard)
  @Get()
  async getAllUser(){
    return this.userService.findAllUser()
  }
  @Get(":username")
  async getByUsername(@Param("username") username: string) {
    return this.userService.findUserByUsername(username)
  }
}
