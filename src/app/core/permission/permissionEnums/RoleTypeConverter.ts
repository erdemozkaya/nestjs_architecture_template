import { RoleType } from "./RoleType";

export enum RoleTypeConverter {
    //kullanilan genel fonksiyonlar
    getall = RoleType.Select,
    getbyid = RoleType.Select,
    add = RoleType.Insert,
    addrange = RoleType.Insert,
    update = RoleType.Update,
    updaterange = RoleType.Update,
    delete = RoleType.Delete,
    deletebyid = RoleType.Delete,
    deleterange = RoleType.Delete,

    //ozel fonksiyonlar
}