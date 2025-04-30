import models from '../models/products.model.js'
import deleteImgfromBackend from '../utils/deleteImgfromBackend.js'
import handleMongoId from '../utils/handle-mongo-id.js'


const getAll = async (req, res) => {
    try {
        const products = await models.getAllProducts()
        res.json(handleMongoId(products))        
    } catch (error) {
        console.log(error)
         // poner mensaje para el front
    }
}

const getOne = async (req, res) => {
    const id = req.params.id
    try {
        if (id) {
            const product = await models.getOneProduct(id)
            res.json(handleMongoId(product))      
        } else {
            res.status(400).json({
                mensaje: 'No se envió la información necesaria'
            })
        }        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'Hubo un inconveniente, no se pudo obtener el producto', error
        })
    }
}

const create = async (req, res) => {
    const productToCreate = req.body
    try {
        const savedProduct = await models.createProduct(productToCreate)
        res.status(201).json(handleMongoId(savedProduct))      
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'No se pudo guardar el producto'
        })
    }
}

const update = async (req, res) => {
    const id = req.params.id
    const productToEdit = req.body
    productToEdit.id = id

    try {
        const editedProduct = await models.editProduct(productToEdit)
        res.json(handleMongoId(editedProduct))
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'No se pudo editar el producto'
        })
    }
}

const remove = async (req, res) => {
    
    const id = req.params.id
    try {
        const deletedProduct = await models.deleteProduct(id)
        await deleteImgfromBackend(deletedProduct)
        res.json(handleMongoId(deletedProduct))

    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: 'No se pudo borrar el producto'
        })
    }
}



export default {
    getAll,
    getOne,
    create,
    update,
    remove
}