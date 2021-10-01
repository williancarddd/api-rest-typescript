import { Database } from "../../../database/data";
import { IGame } from "../../../repositories/interfaces/InterfaceDataBase/IGameRepository";


export class UpdateGame{

  public static ValidateUpdate(newUpdated:IGame){
  const newListObj: Array<Array<Object>> = []
   Object.entries(newUpdated).forEach( e => {
     if(e[1] != undefined){
       newListObj.push(e)
     }
   })
  return Object.fromEntries(newListObj)
  }

  public static UpdateOne(id:number, newUpdated: IGame): Boolean{
    
    if(Database.ExistId(id)){
      Database.UpdateOne(id, this.ValidateUpdate(newUpdated))
      return true
    } else {
      return false
    }
  }
}