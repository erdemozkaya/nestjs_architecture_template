import { Controller } from '@nestjs/common';
import { User } from 'src/app/core/entity/User';
import { BaseController } from 'src/app/infrastructure/base-controller/BaseController';
import { UserService } from './user.service';

@Controller()
export class UserController extends BaseController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
