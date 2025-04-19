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


const createProduct = async (newProduct) => {

    try {
        const productToSave = new ProductModel(newProduct)
        const savedProduct = await productToSave.save()
        return savedProduct

    } catch (error) {
        throw error
    }
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