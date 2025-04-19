import { ProductModel } from "./schemaProducts.js";



const getAllProducts = async () => {
    try {
        const products = await ProductModel.find()
        return products
    } catch (error) {
        throw error
    }
}


const getOneProduct = async (id) => {
    try {
        const product = await ProductModel.findById(id)
        return product
    } catch (error) {
        throw error
    }
}


const createProduct = (newProduct) => {

}


const editProduct = (editedProduct) => {

}


const deleteProduct = (id) => {

}

export default {
    getAllProducts,
    getOneProduct,
    createProduct,
    editProduct,
    deleteProduct
}