import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
    {
        carrito: Array
    }
)

const CartModel = mongoose.model('carritos', cartSchema)


const saveCart = async (carrito) => {

    try {
        const cartCreated = new CartModel(carrito)
        const cartSaved = await cartCreated.save()
        return cartSaved

    } catch (error) {
        throw error
    }
}

export default {
    saveCart
}