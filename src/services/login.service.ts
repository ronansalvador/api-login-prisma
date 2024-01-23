import { createHash } from 'node:crypto'
import { prisma } from '..'
import { newToken } from './register.service'

interface userLogin {
  email: string
  password: string
}

const compareHash = (password: string, originalHash: string) => {
  const newHash = createHash('md5').update(password).digest('hex')

  return newHash === originalHash
}
export const loginService = async ({ email, password }: userLogin) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return { type: 404, message: { message: 'Email inválido' } }
  }

  const hashOriginal = user.password
  const decrypt = compareHash(password, hashOriginal)
  if (decrypt !== true) {
    return { type: 404, message: { message: 'Senha incorreta' } }
  }

  const { password: _, ...userWithoutPassword } = user
  const token = newToken(userWithoutPassword)
  return { type: 200, message: { ...userWithoutPassword, token } }
}
