import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-user-params.dtos';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUserParamsDto: GetUsersParamsDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log('isAuth', isAuth);
    return [
      {
        firstName: 'hung',
        email: 'dongocduyhung7@gmail.com',
      },
      {
        firstName: 'hung',
        email: 'dongocduyhung7@gmail.com',
      },
    ];
  }
  public findUserById(id: string) {
    return {
      id: id,
      firstName: 'hung',
    };
  }
}
