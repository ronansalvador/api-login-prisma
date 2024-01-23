import { prisma } from '..'
import { createHash } from 'node:crypto'
import jwt from 'jsonwebtoken'
import fs from 'fs'

export interface UserCreate {
  name: string
  email: string
  password: string
}

export interface UserReturn extends UserCreate {
  id: number
}

export interface userCreateToken {
  name: string
  email: string
}

export interface UserWithToken {
  id: number
  name: string
  email: string
  token: string
}

const createPassword = (password: string) => {
  const newHash = createHash('md5').update(password).digest('hex')

  return newHash
}

const keySecret = fs.readFileSync('jwt.evaluation.key')

export const newToken = (data: userCreateToken) => {
  const token = jwt.sign({ data }, keySecret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  })
  return token
}

export const registerService = async ({
  name,
  email,
  password,
}: UserCreate): Promise<UserWithToken> => {
  const decrypt = createPassword(password)
  const register: UserReturn = await prisma.user.create({
    data: {
      name,
      email,
      password: decrypt,
    },
  })

  const { password: _, ...userWithoutPassword } = register
  const token = newToken(userWithoutPassword)
  return { ...userWithoutPassword, token }
}
