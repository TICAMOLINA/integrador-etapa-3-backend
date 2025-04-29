import model from '../models/cart.model.js'
import handleMongoId from '../utils/handle-mongo-id.js'

const saveCart = async (req, res) => {
    const cart = req.body

    try {
        const savedCart = await model.createCart(cart)
        res.status(201).json(savedCart)       
    } catch (error) {
        console.log('[saveCart]', error);
        let message = 'No se pudo guardar el carrito'
        res.status(500).json(message)
    }
}

const getAllCarts = async (req, res) => {
    try {
        const carts = await model.getAllCarts()
        res.json(handleMongoId(carts))        
    } catch (error) {
        console.log(error)
        let message = 'No se pueden mostrar los carritos'
        res.status(500).json(message)
    }
}

export default {
    saveCart,
    getAllCarts
}