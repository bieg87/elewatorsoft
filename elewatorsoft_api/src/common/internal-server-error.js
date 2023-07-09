import { HttpStatusCode } from './http-status-code.js'
import BaseError from './base-error.js'

export default class InternalServerError extends BaseError {
  constructor (name, httpCode = HttpStatusCode.INTERNAL_SERVER, description = 'Internal Server Error!', isOperational = true) {
    super(name, httpCode, description, isOperational)
  }
}
