import express from 'express'
import {SelectAllGames} from '../../useCases/SelectAll/SelectAllGames'
import { SelectGame } from '../../useCases/Select/SelectGame'
import { CreateGame } from '../../useCases/Create/CreateGame'
import { DeleteGame } from '../../useCases/Delete/DeleteGame'
import { UpdateGame } from '../../useCases/Update/UpdateGame'

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

routersGames.post('/', (req, res) => {
  const {id, title, year, price } = req.body
  const responseCreateItem =  CreateGame.CreateOne({id, title, year, price})
  if(responseCreateItem){
    res.statusCode = 201
    return res.json({
      id,
      title,
      year,
      price
    })
  } else {
    res.statusCode = 406
    return res.json({
      message: "resource not created"
    })
  }
  
})


routersGames.delete('/:id', (req, res) => {
  const {id} = req.params
  const responseDelete = DeleteGame.DeleteOneGame(Number(id))
  if(responseDelete){
    res.statusCode = 200
    res.json({
      message: "item id " + id + " deleted."
    })
  } else {
    res.statusCode = 400
    res.json({
      message: "item id " + id + " not deleted."
    })
  }
})


routersGames.put('/:id', (req, res) => {
  const {id} = req.params
  const {title, year, price } = req.body
  const responseUpdate = UpdateGame.UpdateOne(Number(id), {title, year, price})
  if(responseUpdate){
    return res.json({
      message: 'item updated'
    })
  } else {
    res.statusCode = 404
    res.json({
      message: 'item not found'
    })
  }
})
export  {routersGames}