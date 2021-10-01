import { Database } from "../../../database/data"

export class SelectAllGames {
  public static GetGames(){
    return Database.GetAll().games
  }
}