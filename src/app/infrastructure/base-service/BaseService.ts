import { IEntity } from 'src/app/core/persistence/IEntity';
import { IEntityRepository } from 'src/app/core/persistence/IEntityRepository';
import { IService } from 'src/app/core/persistence/IService';
import { FilterHelper } from 'src/app/core/utilities/filterHelper';
import { GlobalSettingsService } from 'src/app/core/utilities/global-services/global-settings.service';
import { DataResult } from 'src/app/core/utilities/results/DataResult';
import { ErrorDataResult } from 'src/app/core/utilities/results/ErrorDataResult';
import { ErrorResult } from 'src/app/core/utilities/results/ErrorResult';
import { IResult } from 'src/app/core/utilities/results/IResults';
import { SuccessDataResult } from 'src/app/core/utilities/results/SuccessDataResult';
import { SuccessResult } from 'src/app/core/utilities/results/SuccessResult';
import { EntityMessagesCode } from 'src/app/language/entity-messages-code';

export class BaseService<T extends IEntity> implements IService<T> {
  private readonly _repository;
  private _entityMessages: EntityMessagesCode<T>;
  constructor(
    private globalSettingsService: GlobalSettingsService,
    private repository: IEntityRepository,
    private entityMessages: EntityMessagesCode<T>,
  ) {
    this._repository = repository;
    this._entityMessages = entityMessages;
  }
  
  async getAll(filter: FilterHelper<T>): Promise<DataResult<T[]>> {
    try {
      if (!this.globalSettingsService.isEmpty(filter)) {
        const res = await this._repository.find({
          order: filter?.orderBy
            ? { [filter.orderBy]: filter.desc ? 'DESC' : 'ASC' }
            : undefined,
          where: filter?.data,
          skip: filter?.pagingOptions?.pageSize,
          take: filter?.pagingOptions?.pageNumber,
        });
        return new SuccessDataResult<T[]>(res,await this._repository.count({
          order: filter?.orderBy
            ? { [filter.orderBy]: filter.desc ? 'DESC' : 'ASC' }
            : undefined,
          where: filter?.data ?? null
        }));
      }

      return new ErrorDataResult<T[]>('filter paramater was not found');
    } catch (err) {
      return new ErrorDataResult<T[]>(err.message);
    }
  }

  async getById(id: string | number): Promise<DataResult<T>> {
    try {
      const res = await this._repository.findOne(id);
      return new SuccessDataResult<T>(res);
    } catch (err) {
      return new ErrorDataResult<T>(err.message);
    }
  }

  async add(data: T): Promise<DataResult<T>> {
    try {
      const res = await this._repository.add(data);
      return new SuccessDataResult<T>(res);
    } catch (err) {
      return new ErrorDataResult<T>(this._entityMessages.getMessageCode('AddErrored') as string,err.message);
    }
  }

  async update(data: T): Promise<DataResult<T>> {
    try {
      const getUser = await this._repository.findOne(data.id);
      if (getUser) {
        const res = await this._repository.update(data.id, data);
        if (res.affected > 0)
          return new SuccessDataResult<T>({ ...getUser, ...data } as T);
        return new ErrorDataResult<T>(
          this._entityMessages.getMessageCode('UpdateErrored') as string,
          '',
        );
      } else {
        return new ErrorDataResult<T>(
          this._entityMessages.getMessageCode(
            'UpdateErroredResultNotFound',
          ) as string,
          null,
        );
      }
    } catch (err) {
      return new ErrorDataResult<T>(
        this._entityMessages.getMessageCode('UpdateErrored') as string,
        err.message,
      );
    }
  }

  async delete(id: string | number): Promise<IResult> {
    try {
      const res = await this._repository.delete(id);
      if (res.affected > 0)
        return new SuccessResult(
          this._entityMessages.getMessageCode('Deleted') as string,
        );
      return new ErrorResult(
        this._entityMessages.getMessageCode('DeleteErrored') as string,
      );
    } catch (err) {
      return new ErrorResult(
        this._entityMessages.getMessageCode('DeleteErrored') as string,
      );
    }
  }
}
