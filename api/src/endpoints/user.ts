import express, { Express, Request, Response } from 'express'
import { body } from 'express-validator'
import { validateAll } from '../middleware/validation'
import { createUser } from '../services/user.service'

const router = express.Router()

router.post(
  '/',
  validateAll([
    body('name').isString().isLength({ min: 3 }),
    body('email').isString().isEmail(),
  ]),
  async (req: Request, res: Response) => {
    const userId = await createUser(req.body.name, req.body.email)
    res.status(201).send({ id: userId })
  }
)
export default router
