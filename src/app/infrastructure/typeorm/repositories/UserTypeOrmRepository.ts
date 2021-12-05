import { User } from 'src/app/core/entity/User';
import { TypeOrmRepositoryBase } from 'src/app/infrastructure/typeorm/TypeOrmRepositoryBase';
import { EntityRepository } from 'typeorm';

@EntityRepository(User)
export class UserTypeOrmRepository extends TypeOrmRepositoryBase<User>{}