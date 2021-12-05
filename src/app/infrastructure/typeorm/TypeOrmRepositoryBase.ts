import { IEntity } from "src/app/core/persistence/IEntity";
import { IEntityRepository } from "src/app/core/persistence/IEntityRepository";
import { Repository } from "typeorm";

export class TypeOrmRepositoryBase<T extends IEntity> extends Repository<T> implements IEntityRepository {
    add<T>(entity: T): Promise<T>{
        return this.save(entity);
    };
}