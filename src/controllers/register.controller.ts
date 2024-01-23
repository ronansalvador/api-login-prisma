import { Request, Response } from 'express'
import { UserWithToken, registerService } from '../services/register.service'

export const registerController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const newUser: UserWithToken = await registerService(req.body)

  return res.status(201).json(newUser)
}
