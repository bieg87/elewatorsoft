import asyncHandler from 'express-async-handler'
import { HttpStatusCode } from '../../common/http-status-code.js'
import { listAllUsersService } from '../services/user-service.js'
/**
 * kontroler opakowany w asyncHandler, który wysyła odpowiedź w formacie json
 */
const listAllUsers = asyncHandler(async (request, response, next) => {
  response.set('Access-Control-Allow-Origin', '*')
  response.status(HttpStatusCode.OK).json(listAllUsersService())
})

export { listAllUsers }
