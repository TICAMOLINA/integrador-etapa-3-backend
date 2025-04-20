import mongoose from "mongoose"

// ! Schema


const UserSchema = new mongoose.Schema(
    {
        "nombre": {
            type: String,
            required: true
        },
        "correo": {
            type: String,
            required: true,
            unique: true
        },
        "apellido": String,
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