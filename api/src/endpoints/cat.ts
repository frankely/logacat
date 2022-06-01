import express, { Express, Request, Response } from 'express'
import { body } from 'express-validator'

const router = express.Router()

type CreateCat = {
  name: string
  breed: string
  color: string
  nickname: string | null
  favoriteSnack: string | null
  favoriteToy: string | null
  public: boolean
}

router.post(
  '/',
  body('name').isString(),
  body('breed').isString(),
  body('color').isString(),
  (req: Request<{}, {}, CreateCat>, res: Response) => {
    res.send(req.body)
  }
)

export default router
