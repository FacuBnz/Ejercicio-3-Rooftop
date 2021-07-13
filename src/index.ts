import express from 'express'
import { autorizationUser } from './middlewares/user.middleware'
import userRoutes  from './routes/user.routes'

const app = express()

//middlewares
app.use(express.json())
app.use(autorizationUser, userRoutes)

app.listen(3000)
console.log('Server on port', 3000);