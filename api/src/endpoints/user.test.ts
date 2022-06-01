import { randomInt, randomUUID } from 'crypto'
import request, { Response } from 'supertest'
import app from '../app'

describe('/users', () => {
  describe('POST', () => {
    test('should create user', async () => {
      const response: Response = await request(app)
        .post('/users')
        .send({
          name: 'frank',
          email: `${randomUUID()}${randomInt(1000)}@logacat.com`,
        })

      expect(response.status).toBe(201)
      expect(response.body['id']).toBeDefined()
    })

    test('should return 409 when email is already registered', async () => {
      const uniqueEmail = `${randomUUID()}${randomInt(1000)}@logacat.com`

      await request(app).post('/users').send({
        name: 'frank',
        email: uniqueEmail,
      })

      const response: Response = await request(app).post('/users').send({
        name: 'frank',
        email: uniqueEmail,
      })

      expect(response.status).toBe(409)
    })

    test('should return 400 when name is missing', async () => {
      const response: Response = await request(app)
        .post('/users')
        .send({ email: 'frank@logacat.com' })

      expect(response.status).toBe(400)
    })

    test('should return 400 when email is missing', async () => {
      const response: Response = await request(app)
        .post('/users')
        .send({ name: 'frank' })

      expect(response.status).toBe(400)
    })
  })
})
