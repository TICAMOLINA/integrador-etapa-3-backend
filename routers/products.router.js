import express from 'express'
const routerProducts = express.Router()
import productsController from '../controllers/products.controller.js'


routerProducts.get('/', productsController.getAll )

routerProducts.get('/:id', productsController.getOne)

routerProducts.post('/', productsController.create)

routerProducts.put('/:id', productsController.update)

routerProducts.delete('/:id', productsController.remove)

export default routerProducts