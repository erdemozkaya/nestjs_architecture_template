import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { GlobalSettingsService } from 'src/app/core/utilities/global-services/global-settings.service';
import { UserTypeOrmRepository } from 'src/app/infrastructure/typeorm/repositories/UserTypeOrmRepository';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeOrmRepository])],
  controllers: [UserController],
  providers: [UserService,GlobalSettingsService],
})
export class UserModule {}
