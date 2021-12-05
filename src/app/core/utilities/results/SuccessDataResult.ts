import { DataResult } from './DataResult';

export class SuccessDataResult<T> extends DataResult<T>{
    constructor(data:T, message:string, totalCount:number);
    constructor(data:T, totalCount:number);
    constructor(data:T, message:string);
    constructor(data:T);
    constructor(message:string);
    constructor();

    constructor(...arg:any[]){
        // data: T, success: boolean, message: string, code: string
        if(arg.length == 3) super(arg[0],true,arg[1],arg[2]);

        // data: T, success: boolean, message: string
        if(arg.length == 2) super(arg[0],true,arg[1]);

        if(arg.length == 1){
            if(typeof arg[0] === 'string'){
                // data: T, success: boolean, message: string
                super(null,true,arg[0]);
            }else{
                // data: T, success: boolean, totalCount: number
                super(arg[0] ?? null,true, (Array.isArray(arg[0]) ? Number(arg[0].length) : Number(arg[0] ? 1 : 0)));
            }
        }
        // data: T, success: boolean
        if(arg.length == 0) super(null,true);
    }
}