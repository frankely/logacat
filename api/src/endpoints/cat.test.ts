import { randomUUID } from 'crypto'
import request, { Response } from 'supertest'
import app from '../app'

describe('/cat', () => {
  describe('POST', () => {
    test('should return 200 when all required fields are provided', async () => {
      const response: Response = await request(app)
        .post('/cats')
        .send({
          name: `${randomUUID()}`,
          breed: `${randomUUID()}`,
          color: `${randomUUID()}`,
        })
      expect(response.status).toBe(200)
    })

    const invalidRequests = [
      {
        name: '',
        breed: '',
        color: '',
      },
      {
        name: 'olive',
        breed: '',
        color: '',
      },
      {
        name: 'olive',
        breed: 'american short hair',
        color: '',
      },
      {
        name: 'olive',
        breed: '',
        color: 'black',
      },
      {
        name: '',
        breed: 'american short hair',
        color: 'black',
      },
    ]

    invalidRequests.forEach(invalidRequest => {
      test(`create a new cat returns 400 when one of the required fields is missing from request`, async () => {
        const response: Response = await request(app)
          .post('/cats')
          .send(invalidRequest)
        expect(response.status).toBe(400)
      })
    })
  })
})
