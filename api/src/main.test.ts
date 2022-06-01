import { randomUUID } from 'crypto'
import say from './main'

describe('main', () => {
  it('should pass', () => {
    const word = randomUUID()
    expect(say(word)).toBe(`${word}`)
  })
})
