import { Database } from "../../../database/data";


export class DeleteGame{
  public static DeleteOneGame(id: number): Boolean{
    if(Database.ExistId(id)){
      Database.DeleteOne(id)
      return true
    } else  {
      return false
    }
  }
}