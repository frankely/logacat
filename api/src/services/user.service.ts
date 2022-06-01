import client from '../data/client'
import { ErrorCode, ErrorException } from '../middleware/error'

async function createUser(name: string, email: string): Promise<number> {
  const count = await client.user.count({ where: { email: email } })

  if (count > 0) {
    throw new ErrorException(ErrorCode.RecordAlreadyExists, {
      message: `User with email ${email} already exists`,
    })
  }

  const user = await client.user.create({
    data: {
      name,
      email,
    },
  })

  return user.id
}

export { createUser }
