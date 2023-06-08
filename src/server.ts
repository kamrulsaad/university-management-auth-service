import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully ✅')

    app.listen(config.port, () => {
      logger.info(`Server started on port ${config.port} 🚀`)
    })
  } catch (error) {
    errorLogger.error(`Error while connecting to database: ${error} ❌`)
  }
}

bootstrap()
