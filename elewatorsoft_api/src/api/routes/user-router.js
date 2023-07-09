import express from 'express'
import * as userController from '../controllers/user-controller.js'

const router = express.Router()

/**
 * router obsługujący endpoint
 */
router.get('/listAllUsers', userController.listAllUsers)

export default router
