import request, { Response } from 'supertest'
import app from '../app'

describe('/users', () => {
  describe('GET', () => {
    test('should return all users', async () => {
      const response: Response = await request(app).get('/users')
      expect(response.status).toBe(200)
    })
  })
})
