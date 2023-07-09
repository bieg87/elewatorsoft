class NotFoundErrorHandler {
  handleError (error) {
    console.log(`Not Found Error ${error.message}`)
  }
}

export const notFoundErrorHandler = new NotFoundErrorHandler()
