import { IResult } from "./IResults";

export interface IDataResults<T> extends IResult {
    data:T;
    totalCount:number;
}