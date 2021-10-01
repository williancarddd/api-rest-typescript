import {IDatabase} from '../repositories/interfaces/InterfaceDataBase/IDatabaseRepository'
import { IGame } from '../repositories/interfaces/InterfaceDataBase/IGameRepository'

 const data:IDatabase = { 
  games:[
    {
      id:23,
      title:"Call of duty MW",
      year: 2020,
      price: 60
    },
    {
      id:30,
      title:"Sea of thieves",
      year: 2018,
      price: 40
    },
    {
      id:2,
      title:"Minecraft",
      year: 2012,
      price: 20
    }
  ]
}

export class Database{
  
  protected static IndexItem(id: number){
    return  data.games.findIndex(game => game.id == id)
  }

  public static ExistId(id:number): Boolean{
    const indexItem = this.IndexItem(id)
    
    if(indexItem != -1){
      return true
    } {
      return false
    }
  }

  public static GetAll(): IDatabase{
    return  data
  }

  public static GetOne(id:number): IGame | undefined{
    return data.games.find(game => game.id == id)
  }

  public static CreateOne(newGame:IGame){
    data.games.push(newGame)
  }
  
  public static UpdateOne(id:number, updatedGame: IGame){
    console.log(updatedGame)
    data.games[this.IndexItem(id)]  = {
      ...data.games[this.IndexItem(id)],
      ...updatedGame
    }
  }

  public static DeleteOne(id:number){
   const positionItem =  this.IndexItem(id)
   const itemDelet = data.games[positionItem]
   data.games.splice(positionItem, 1)
   return itemDelet
  }
  

}
