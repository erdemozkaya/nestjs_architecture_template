import { EntityMessagesCode } from '../../language/entity-messages-code';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GlobalSettingsService } from 'src/app/core/utilities/global-services/global-settings.service';
import { BaseService } from 'src/app/infrastructure/base-service/BaseService';
import { UserTypeOrmRepository } from 'src/app/infrastructure/typeorm/repositories/UserTypeOrmRepository';
import { User } from 'src/app/core/entity/User';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(UserTypeOrmRepository)
      usersRepository: UserTypeOrmRepository,
      globalSettingsService:GlobalSettingsService,
  ) {
    super(globalSettingsService,usersRepository,new EntityMessagesCode<User>(User));
  }
}
