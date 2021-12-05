import { DataResult } from './DataResult';

export class ErrorDataResult<T> extends DataResult<T> {
    errorDetail:string;
    errorCode:string;

    constructor(errorCode:string, message:string);
    constructor(message:string, errorCode:string, errorDetail:string);
    constructor(data:T, message:string);
    constructor(data:T);
    constructor(message:string);
    constructor();

    constructor(...arg: any[]) {
        
        if(arg.length == 3) {
            // data: T, success: boolean, message: string
            super(null,false,arg[0]);
            this.errorCode = arg[1];
            this.errorDetail = arg[2];
        }

        if(arg.length == 2) {
            if(typeof arg[0] === 'string'){
                // data: T, success: boolean, message: string, code: string
                super(undefined,false,arg[1],arg[0]);
            }else{
                // data: T, success: boolean, message: string
                super(arg[0],false,arg[1])
            }
        }

        if(arg.length == 1){
            if(typeof arg[0] === 'string'){
                // data: T, success: boolean, message: string
                super(null,false,arg[0]);
            }else{
                // data: T, success: boolean
                super(arg[0],false);
            }
        }

        if(arg.length == 0) super()
    }
}