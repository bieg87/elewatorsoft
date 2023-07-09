import BaseError from '../common/base-error.js'

class ErrorHandler {
  handleError (error) {
    console.log(`Error occured ${error.message}`)
  }

  isTrustedError (error) {
    if (error instanceof BaseError) {
      return error.isOperational
    }
    return false
  }
}

export const errorHandler = new ErrorHandler()
