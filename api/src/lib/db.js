import { PrismaClient } from '@prisma/client'
import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'
import { logger } from './logger'

export const db = new PrismaClient({
  log: emitLogLevels(['info', 'warn', 'error']),
})

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})