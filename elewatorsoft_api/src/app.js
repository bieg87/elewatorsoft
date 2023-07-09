import express from 'express'
import { errorHandler } from './middleware/error.middleware.js'
import { notFoundErrorHandler } from './middleware/not-found-error.middleware.js'
import { internalServerErrorHandler } from './middleware/internal-server-error.middleware.js'
import { HttpStatusCode } from './common/http-status-code.js'
import BaseError from './common/base-error.js'
import NotFoundError from './common/not-found-error.js'
import InternalServerError from './common/internal-server-error.js'
import router from './api/routes/user-router.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use('/', router)

app.use(cors())
app.use(bodyParser.json())

app.use((request, response, next) => {
  throw new NotFoundError('Endpoint was not found!')
})

app.use((error, request, response, next) => {
  if (!errorHandler.isTrustedError(error)) {
    next(error)
  }

  if (error instanceof NotFoundError) {
    notFoundErrorHandler.handleError(error)
    response.status(HttpStatusCode.NOT_FOUND).json({ error: 'Not Found Error' })
  } else if (error instanceof InternalServerError) {
    internalServerErrorHandler.handleError(error)
    response.status(HttpStatusCode.INTERNAL_SERVER).json({ error: 'Internal Server Error' })
  } else if (error instanceof BaseError) {
    errorHandler.handleError(error)
    response.status(error.httpCode).json({ error: error.message })
  }
})

process.on('unhandledRejection', error => {
  throw error
})

process.on('uncaughtException', error => {
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1)
  }
})

export default app
