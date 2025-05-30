import mongoose from "mongoose"

// ! Schema


const ProductSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        foto: String,
        sliderFoto: String,
        descripcion: String,
        precio: Number,
        stock: Number,
        categoria: String,
        envio: Boolean
    },
    {
        timestamps: true,
        versionKey: false
    }
)

// ! Schema Model

const ProductModel = mongoose.model('productos', ProductSchema)

export { ProductModel }