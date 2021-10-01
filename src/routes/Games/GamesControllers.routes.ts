import express from 'express'
const routersGames = express.Router()

routersGames.get('/', (req, res) => {
  return res.send('oi')
})

export  {routersGames}