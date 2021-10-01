import express from 'express'
import { routersGames } from './Games/GamesControllers.routes'
const routers = express.Router()

routers.use('/games' , routersGames)

export {routers}