import express from 'express'
import {SelectAllGames} from '../../useCases/SelectAll/SelectAllGames'
import { SelectGame } from '../../useCases/Select/SelectGame'
const routersGames = express.Router()

routersGames.get('/', (req, res) => {
  return res.json(SelectAllGames.GetGames())
})

routersGames.get('/:id', (req, res ) => {
  const {id}  = req.params
  const itemFind = SelectGame.SelectOne(Number(id))

  if(itemFind != undefined){
    return res.json(itemFind)
  } else {
    res.statusCode = 404
    return res.json({})
  }
})

export  {routersGames}