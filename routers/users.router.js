import express from 'express'
const routerUsers = express.Router()
import usersController from '../controllers/users.controller.js'

routerUsers.get('/', usersController.getAll )

routerUsers.get('/:id', usersController.getOne)

routerUsers.post('/', usersController.create)

routerUsers.put('/:id', usersController.update)

routerUsers.delete('/:id', usersController.remove)

export default routerUsers