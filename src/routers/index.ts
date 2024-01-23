import { Router } from 'express'
import {
  createEventController,
  readAllEventsController,
  updateEventController,
  deleteEventController,
} from '../controllers/event.controller'
import { registerController } from '../controllers/register.controller'
import { loginController } from '../controllers/login.controller'

export const routes: Router = Router()

routes.post('/events', createEventController)
routes.get('/events', readAllEventsController)
routes.patch('/events/:id', updateEventController)
routes.delete('/events/:id', deleteEventController)
routes.post('/login', loginController)
routes.post('/register', registerController)
