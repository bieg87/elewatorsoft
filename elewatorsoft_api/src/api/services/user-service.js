import InternalServerError from '../../common/internal-server-error.js'
import fs from 'fs'

const listAllUsersService = () => {
  let result

  try {
    const data = fs.readFileSync('./src/api/model/users.txt', 'utf8')
    result = JSON.parse(data.toString())
  } catch {
    throw new InternalServerError('Internal server error occured!')
  }
  if (result === undefined) {
    throw new InternalServerError('Internal server error occured!')
  }

  return result
}

export { listAllUsersService }
