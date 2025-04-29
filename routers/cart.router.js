import express from 'express'
const routerCart = express.Router()
import controller from '../controllers/cart.controller.js'


routerCart.post('/', controller.saveCart)

routerCart.get('/', controller.getAllCarts)


export default routerCart