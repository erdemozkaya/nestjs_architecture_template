import { FilterHelper } from "src/app/core/utilities/filterHelper";
import { DataResult } from "src/app/core/utilities/results/DataResult";
import { IResult } from "src/app/core/utilities/results/IResults";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IService<T> {
    getAll(filter:FilterHelper<T>): Promise<DataResult<T[]>>

    getById(id:number | string): Promise<DataResult<T>>

    add(data:T): Promise<DataResult<T>>

    update(data:T): Promise<DataResult<T>>

    delete(id:number | string): Promise<IResult>
}