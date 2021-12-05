import { Injectable } from "@nestjs/common";

@Injectable()
export class GlobalSettingsService {
    /**
     * Return new date
     * @returns new just date format yyyy/dd/mm
     */
  getNewDate(){
    return new Date(new Date().toISOString().slice(0, 10));
  }

  isEmpty(obj) {
    if (obj == null) return true;

    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    if (typeof obj !== "object") return true;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }
  
  spaceRemoveAll(val: string) {
    return val.replace(/ /gim, "");
  }
}