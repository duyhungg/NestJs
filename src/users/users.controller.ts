import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Header,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';
import { GetUsersParamsDto } from './dtos/get-user-params.dtos';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(
    @Param() getUserParamsDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log('getUserParamsDto ', getUserParamsDto);
    console.log('query ', limit);
    console.log('page ', page);

    return `123`;
  }
  @Post()
  @Header('Cache-Control', 'no-store')
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log('request', createUserDto instanceof CreateUserDto);
    return 'create user';
  }
  @Patch()
  public patchUser(@Body() pathUserDto: PatchUserDto) {
    console.log('pathUserDto', pathUserDto);
    return 'path';
  }
}
