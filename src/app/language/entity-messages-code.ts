import { Injectable } from '@nestjs/common';
import { IEntity } from '../core/persistence/IEntity';

@Injectable()
export class EntityMessagesCode<T extends IEntity> {
    private TName : string;
    constructor(x : new () => T){
        this.TName = x.name;
    }
    // constructor(...arg){
    //     if(arg.length == 0){
    //         let x: new () => T;
    //         this.TName = x.name;
    //     }
    // }

    getMessageCode<T>(entityMessageType:EntityMessageType):String{
        return `${this.TName+entityMessageType}`
    }
}

export const entityMessageTypes = [
    "Added",
    "Deleted",
    "Updated",
    "AddErrored",
    "DeleteErrored",
    "UpdateErrored",
    "ListErrored",
    "AlreadyExist",
    "DeleteErroredResultNotFound",
    "DeleteErroredRelatedRecord",
    "UpdateErroredResultNotFound",
    "MissingInformation",
    "NotFound",
    "AnErrorHasOccured",
    "DatePropertyErrored"
] as const;
export type EntityMessageType = typeof entityMessageTypes[number];