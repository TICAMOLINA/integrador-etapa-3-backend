import model from '../models/cart.model.js'

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

export default {
    saveCart
}