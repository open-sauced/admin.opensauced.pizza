import { db } from 'src/lib/db'

export const repositories = () => {
  return db.repository.findMany()
}

export const repository = ({ id }) => {
  return db.repository.findUnique({
    where: { id },
  })
}

export const createRepository = ({ input }) => {
  return db.repository.create({
    data: input,
  })
}

export const updateRepository = ({ id, input }) => {
  return db.repository.update({
    data: input,
    where: { id },
  })
}

export const deleteRepository = ({ id }) => {
  return db.repository.delete({
    where: { id },
  })
}
