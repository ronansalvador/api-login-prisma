import { PrismaClient } from '@prisma/client'
import express, { Application, json } from 'express'
import { routes } from './routers'
import cors from 'cors'

export const prisma: PrismaClient = new PrismaClient()

export const app: Application = express()
app.use(cors())
app.use(json())
app.use(routes)
