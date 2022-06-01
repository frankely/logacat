import request, { Response } from 'supertest'
import app from '../app'

describe('/cat', () => {
  describe('POST', () => {
    test('create a new cat', async () => {
      const response: Response = await request(app).post('/cats').send({})
      expect(response.status).toBe(200)
    })
  })
})
