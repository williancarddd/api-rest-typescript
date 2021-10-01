import { Database } from "../../../database/data";

export class SelectGame{
  public static SelectOne(id:number){
    return Database.GetOne(id)
  }
}