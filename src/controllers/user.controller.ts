import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController{
  constructor(private userService: UserService){}
  @Get(":username")
  async getByUsername(@Param("username") username: string) {
    return this.userService.findUserByUsername(username)
  }
}
