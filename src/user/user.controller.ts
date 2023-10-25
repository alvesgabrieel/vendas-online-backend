import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async CreateUser(@Body() createUser: createUserDto) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
