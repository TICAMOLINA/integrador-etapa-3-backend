import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/uploads.controller.js'
import uploadsMiddleware from '../middlewares/uploads.middleware.js'


routerUpload.post('/', uploadsMiddleware.single('foto'), controller.uploadImage)

export default routerUpload