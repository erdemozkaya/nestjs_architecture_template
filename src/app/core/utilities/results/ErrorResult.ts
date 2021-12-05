import { Result } from './Result';
export class ErrorResult extends Result {
    constructor(code:string, message:string, errorDetail:string);
    constructor(code:string, message:string);
    constructor(code:string);
    constructor();
    constructor(...arg){
        if(arg.length == 3){
            super(false,arg[0],arg[1]);
            this.errorDetail = arg[2];
        }

        if(arg.length == 2){
            super(false,arg[0],arg[1]);
        }

        if(arg.length == 1){
            super(false,arg[0]);
        }

        if(arg.length == 0){
            super(false);
        }
    }

    errorDetail:string;
}