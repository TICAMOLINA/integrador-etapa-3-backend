import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/uploads.controller.js'


routerUpload.post('/', controller.uploadImage)

export default routerUpload