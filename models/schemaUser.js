import mongoose from "mongoose"

// ! Schema


const UserSchema = new mongoose.Schema(
    {
        "nombre": {
            type: String,
            required: true
        },
        "apellido": String,
        "correo": {
            type: String,
            required: true,
            unique: true
        },
        "dni": String,
        "nacionalidad": String,
        "password": {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

// ! Schema Model

const UserModel = mongoose.model('usuarios', UserSchema)

export { UserModel }