class InternalServerErrorHandler {
  handleError (error) {
    console.log(`Internal Server Error ${error.message}`)
  }
}

export const internalServerErrorHandler = new InternalServerErrorHandler()
