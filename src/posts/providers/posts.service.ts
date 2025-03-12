import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  public findAll(userId: string) {
    const user = this.usersService.findUserById(userId);
    console.log('userId: ', userId);
    return user;
  }
}
