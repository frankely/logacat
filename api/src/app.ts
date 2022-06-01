import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import user from './endpoints/user'
import cat from './endpoints/cat'
import { errorHandler } from './middleware/error.handler'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(errorHandler)

app.use('/users', user)
app.use('/cats', cat)

export default app
