import {IDatabase} from '../repositories/interfaces/InterfaceDataBase/IDatabaseRepository'

export const database:IDatabase = { 
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