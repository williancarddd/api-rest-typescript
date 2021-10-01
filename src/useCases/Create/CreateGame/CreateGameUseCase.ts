import { Database} from '../../../database/data'
import { IGame } from '../../../repositories/interfaces/InterfaceDataBase/IGameRepository';

export class CreateGame{
  public static CreateOne({id, title, year, price}:IGame): Boolean{
    if(!Database.ExistId(id)){
      Database.CreateOne({
        id,
        title, 
        year, 
        price
      })
      return true
    } else {
      return false
    }
  }
}