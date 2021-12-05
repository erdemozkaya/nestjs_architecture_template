import { IResult } from './IResults';

export class Result implements IResult {
    constructor(success:boolean, code:string, message:string);
    constructor(success:boolean, code:string);
    constructor(success:boolean);
    constructor(...arg: any[]) {
        if (arg.length === 3){
            this.success = arg[0];
            this.code = arg[1];
            this.message = arg[2]
        }

        if (arg.length === 2){
            this.success = arg[0];
            this.code = arg[1];
        }

        if(arg.length == 1){
            this.success = arg[0];
        }
    }

    success: boolean;
    message: string;
    code:string;
}