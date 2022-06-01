import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import user from './endpoints/user'
import cat from './endpoints/cat'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use('/users', user)
app.use('/cats', cat)

export default app
