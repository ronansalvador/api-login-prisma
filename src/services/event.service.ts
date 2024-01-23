import { prisma } from '..'

export interface EventCreate {
  name: string
  location: string
  participants_quantity: number
  date: Date
  responsible: string
}

export interface EventReturn extends EventCreate {
  id: number
}

export interface EventUpdate {
  name: string
  location: string
  participants_quantity: number
  date: Date
}

export const createEventService = async ({
  name,
  location,
  participants_quantity,
  date,
  responsible,
}: EventCreate): Promise<EventReturn> => {
  const eventDate = new Date(date)
  const newEvent: EventReturn = await prisma.event.create({
    data: {
      name,
      location,
      participants_quantity,
      date: eventDate,
      responsible,
    },
  })

  return newEvent
}

export const readAllEventsService = async (): Promise<EventReturn[]> => {
  const events: EventReturn[] = await prisma.event.findMany()

  return events
}

export const updateEventService = async (
  id: number,
  data: EventUpdate,
): Promise<EventReturn> => {
  const event: EventReturn = await prisma.event.update({
    where: {
      id,
    },
    data,
  })

  return event
}

export const deleteEventService = async (id: number): Promise<void> => {
  await prisma.event.delete({
    where: {
      id,
    },
  })
}
