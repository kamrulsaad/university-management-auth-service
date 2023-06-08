import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
import usersRoute from './app/modules/users/users.route'

app.use('/api/v1/users/', usersRoute)

app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
