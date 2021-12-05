import { DataPagingOptions } from './paging/DataPagingOptions';

export class FilterHelper<T> {
    data: T;
    includes: Array<string>;
    pagingOptions: DataPagingOptions;
    orderBy:string;
    desc: boolean
}