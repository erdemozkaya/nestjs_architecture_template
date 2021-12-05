import { UserModule } from './app/bussiness/user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRoutingModule } from './app-routing.module';
import { User } from './app/core/entity/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'NestJsTest',
      entities: [User],
      synchronize: false,
    }),
    UserModule,
    AppRoutingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
