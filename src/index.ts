import express from 'express'
import { routers } from './routes/index.routes'

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routers)


app.listen(process.env.PORT || 3000, () => {
  console.log("❤️ server listening port " + (process.env.PORT || 3000))
})