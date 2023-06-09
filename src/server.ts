import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

async function bootstrap() {
  let server: Server

  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully ✅')

    server = app.listen(config.port, () => {
      logger.info(`Server started on port ${config.port} 🚀`)
    })
  } catch (error) {
    errorLogger.error(`Error while connecting to database: ${error} ❌`)
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection detected, closing down server...')

    if (server) {
      server.close(() => {
        errorLogger.error(`Error: ${error} ❌`)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()
