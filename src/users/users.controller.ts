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
import { UsersService } from './providers/users.service';

//
import { Zalo } from 'zca-js';
import * as fs from 'fs';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:id')
  public getUsers(
    @Param() getUserParamsDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log('getUserParamsDto ', getUserParamsDto);
    console.log('query ', limit);
    console.log('page ', page);

    return this.usersService.findAll(getUserParamsDto, limit, page);
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
  @Get('/login/cookie')
  public async LoginWithCookie() {
    const zalo = new Zalo({
      selfListen: false, // mặc định false, lắng nghe sự kiện của bản thân
      checkUpdate: true, // mặc định true, kiểm tra update
      logging: true, // mặc định true, bật/tắt log mặc định của thư viện
    });

    // đọc cookie đã lưu ở bước 5
    // const cookie = JSON.parse(fs.readFileSync('./cookie.json', 'utf-8'));
    // const cookie = fs.readFileSync('./cookie.json', 'utf8');

    const api = await zalo.login({
      cookie: {
        url: 'https://chat.zalo.me',
        cookies: [
          {
            domain: '.zalo.me',
            expirationDate: 1778900526.685127,
            hostOnly: false,
            httpOnly: false,
            name: '__zi',
            path: '/',
            sameSite: 'no_restriction',
            secure: true,
            session: false,
            storeId: '0',
            value:
              '3000.SSZzejyD0j4aXwcumq80XYV9fw207XACQOMbeyvK48ffWgJgp58In661ekZ6NXVCCW.1',
          },
          {
            domain: '.zalo.me',
            expirationDate: 1778900526.685265,
            hostOnly: false,
            httpOnly: false,
            name: '__zi-legacy',
            path: '/',
            sameSite: 'unspecified',
            secure: false,
            session: false,
            storeId: '0',
            value:
              '3000.SSZzejyD0j4aXwcumq80XYV9fw207XACQOMbeyvK48ffWgJgp58In661ekZ6NXVCCW.1',
          },
          {
            domain: '.zalo.me',
            expirationDate: 1744871020.376874,
            hostOnly: false,
            httpOnly: false,
            name: 'zoaw_type',
            path: '/',
            sameSite: 'no_restriction',
            secure: true,
            session: false,
            storeId: '0',
            value: '0',
          },
          {
            domain: '.zalo.me',
            expirationDate: 1744871020.376702,
            hostOnly: false,
            httpOnly: true,
            name: 'zoaw_sek',
            path: '/',
            sameSite: 'no_restriction',
            secure: true,
            session: false,
            storeId: '0',
            value:
              'dNDi.799111283.2.6BWa6AHw-J3N0bWVf7hvCAHw-J2aUlamfNrvmyDw-J0',
          },
          {
            domain: '.zalo.me',
            expirationDate: 1744426940.560851,
            hostOnly: false,
            httpOnly: false,
            name: '_zlang',
            path: '/',
            sameSite: 'unspecified',
            secure: true,
            session: false,
            storeId: '0',
            value: 'vn',
          },
          {
            domain: '.zalo.me',
            expirationDate: 1775876539.723868,
            hostOnly: false,
            httpOnly: true,
            name: 'zpsid',
            path: '/',
            sameSite: 'no_restriction',
            secure: true,
            session: false,
            storeId: '0',
            value:
              '2zEz.233605311.16.Sx8mNa7B787-G_2CJSiSWJIuRhDo-2gnTFWji3A2mVKDf9d0GFUQUIRB784',
          },
          {
            domain: '.chat.zalo.me',
            expirationDate: 1744945340.376357,
            hostOnly: false,
            httpOnly: true,
            name: 'zpw_sek',
            path: '/',
            sameSite: 'lax',
            secure: true,
            session: false,
            storeId: '0',
            value:
              'KfHl.233605311.a0.Z8hqXNpp8QN3UyseNVCXfGVHHCvUoGFEJwKEzKx4KSiuYq_a6QDjxWQW5VOBpXo70OLaaTg_JY0zyXmZX9GXfG',
          },
          {
            domain: '.zalo.me',
            expirationDate: 1744513341.607982,
            hostOnly: false,
            httpOnly: true,
            name: 'app.event.zalo.me',
            path: '/',
            sameSite: 'unspecified',
            secure: false,
            session: false,
            storeId: '0',
            value: '238565896463704518',
          },
        ],
      },
      imei: 'e6c6d535-4a22-4403-881e-0512ff14bd7c-800683566637788f812c9cb58711ba4c',
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/135.0.0.0', // điền giá trị đã lấy ở bước 4
    });

    // api.listener.start(); // bắt đầu lắng nghe sự kiện
    return api;
  }
  @Get('/login/qr')
  public async LoginWithQr() {
    const zalo = new Zalo({
      selfListen: false, // mặc định false, lắng nghe sự kiện của bản thân
      checkUpdate: true, // mặc định true, kiểm tra update
      logging: true, // mặc định true, bật/tắt log mặc định của thư viện
    });
    const api = await zalo.loginQR(
      {
        userAgent: '', // không bắt buộc
        qrPath: '', // đường dẫn lưu QR, mặc định ./qr.png
      },
      (qrPath) => {
        // đã lưu mã qr
        console.log('qrPath', qrPath);
      },
    );
    api.listener.on('message', (message) => {
      console.log('Đang có tin nhắn mới', message);
    });

    api.listener.start();
    return api;
  }
  @Get('/login/multi')
  public async LoginWithMultiAccount() {
    const zalo = new Zalo({
      selfListen: false,
      checkUpdate: true,
      logging: false,
    });

    const loggedInAccounts = [];

    async function app() {
      const api = await zalo.loginQR({}, (qrPath: any) => {
        console.log(`Quét mã tại để đăng nhập`, qrPath);
      });
      api.listener.start();
      const ownId = api.getOwnId();
      console.log(`Đã đăng nhập vào tài khoản ${ownId}`);
      loggedInAccounts.push(ownId);
    }

    for (let i = 0; i < 4; i++) {
      await app();
    }

    return loggedInAccounts;
  }
}
