import express, { Express, Request, Response } from 'express'
import { body } from 'express-validator'
import { validateAll } from '../middleware/validation'

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
  validateAll([
    body('name').isString().isLength({ min: 3 }),
    body('breed').isString().isLength({ min: 3 }),
    body('color').isString().isLength({ min: 3 }),
  ]),
  (req: Request<{}, {}, CreateCat>, res: Response) => {
    res.send(req.body)
  }
)

export default router
