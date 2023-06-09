import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import express, { Application } from 'express'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
import { UserRoutes } from './app/modules/user/user.route'

app.use('/api/v1/users/', UserRoutes)

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Bad Request')
//   // next('Ore Baba Error')
// })

//global error handler
app.use(globalErrorHandler)

export default app
