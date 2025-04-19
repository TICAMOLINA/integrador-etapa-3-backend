import models from '../models/products.model.js'

const getAll = async (req, res) => {
    try {
        const products = await models.getAllProducts()
        res.json(products)        
    } catch (error) {
        console.log(error)
         // poner mensaje para el front
    }
}

const getOne = async (req, res) => {
    const id = req.params.id
    try {
        const product = await models.getOneProduct(id)
        res.json(product)
        // Hay que hacer algo si no lo recibo        
    } catch (error) {
        console.log(error);
        // poner mensaje para el front
    }
}

const create = async (req, res) => {
    const productToCreate = req.body
    try {
        const savedProduct = await models.createProduct(productToCreate)
        res.json(savedProduct)      
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'No se pudo guardar el producto'
        })
    }
}

const update = (req, res) => {
    const id = req.params.id
    const productoAEditar = req.body
    console.log(id)
    console.log(productoAEditar)
    res.send('UPDATE producto')
}

const remove = (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send('DELETED Producto')
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}