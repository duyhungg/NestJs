import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Ip,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log('params ', id);
    console.log('query ', limit);

    return `123`;
  }
  @Post()
  @Header('Cache-Control', 'no-store')
  public createUsers(
    @Body() request: any,
    @Headers() header: any,
    @Ip() ip: any,
  ) {
    console.log('request', request);
    console.log('header', header);
    console.log('ip', ip);
    return 'create user';
  }
}
