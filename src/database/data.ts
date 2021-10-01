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

  public static GetAll(): IDatabase{
    return  data
  }

  public static GetOne(id:number): IGame | undefined{
    return data.games.find(game => game.id == id)
  }

  public static DeleteOne(id:number){
   const positionItem =  data.games.findIndex(game => game.id == id)
   const itemDelet = data.games[positionItem]
   data.games.splice(positionItem, 1)
   return itemDelet
  }
}
