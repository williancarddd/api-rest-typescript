import express from 'express'
import { routers } from './routes/index.routes'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routers)


app.listen(process.env.PORT || 5500, () => {
  console.log("❤️ server listening port " + (process.env.PORT || 5500))
})