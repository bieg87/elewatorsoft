import { HttpStatusCode } from './http-status-code.js'
import BaseError from './base-error.js'

export default class NotFoundError extends BaseError {
  constructor (name, httpCode = HttpStatusCode.NOT_FOUND, description = 'Endpoint was not found!', isOperational = true) {
    super(name, httpCode, description, isOperational)
  }
}
