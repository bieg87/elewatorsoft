import express from 'express'
import * as userController from '../controllers/user-controller.js'

const router = express.Router()

/**
 * @param {string} path
 * @param {callback}
 *  */
router.get('/listAllUsers', userController.listAllUsers)

export default router
