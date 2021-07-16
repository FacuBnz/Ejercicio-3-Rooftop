require('dotenv').config()
import express from 'express'
import { autorizationUser } from './middlewares/user.middleware'
import { log } from './middlewares/log.middleware'
import userRoutes  from './routes/user.routes'

const app = express()

//middlewares
app.use(express.json())
app.use(log)
app.use(autorizationUser)

//routes
app.use(userRoutes)

app.listen(process.env.PORT)
console.log('Server on port', process.env.PORT);