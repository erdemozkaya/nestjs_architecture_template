import { Result } from './Result';
import { IDataResults } from './IDataResults';

export class DataResult<T> extends Result implements IDataResults<T> {

    constructor(data:T, success:boolean , message:string)

    constructor(data:T, success:boolean , message:string, code:string)

    constructor(data:T, success:boolean , message:string, totalCount:number);

    constructor(data:T, success:boolean , totalCount:number);

    constructor(data:T, success:boolean);

    constructor();

    constructor(...arg:any[]){
        //3 argument constructor called here
        if(arg.length == 3){
            if(Number.isInteger(arg[2])){
                //success
                super(arg[1]);
                this.data = arg[0];
                this.totalCount = arg[2];
            }else{
                //success and code
                super(arg[1],arg[2]);
                this.data = arg[0];
            }
        }

        //4 argument constructor called here
        if(arg.length == 4){
            if(typeof arg[3] === "string"){
                //success, code, message
                super(arg[1],arg[3],arg[2]);

                this.data = arg[0];
                this.totalCount = undefined;
            }else{
                //success, code
                super(arg[1],arg[2]);

                this.data = arg[0];
                this.totalCount = arg[3];
            }
        }

        //2 argument constructor called here
        if(arg.length == 2){
            //success
            super(arg[1]);
            this.data = arg[0];
        }
    }
    
    data:T;
    totalCount:number;
}