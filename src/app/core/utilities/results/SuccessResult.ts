import { Result } from "./Result";

export class SuccessResult extends Result {
    constructor(code:string,message:string);
    constructor(code:string);
    constructor();
    constructor(...arg){
        if(arg.length == 2){
            super(true,arg[0],arg[1]);
        }

        if(arg.length == 1){
            super(true,arg[0]);
        }

        if(arg.length == 0){
            super(true);
        }
    }
}