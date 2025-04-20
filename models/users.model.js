import { UserModel } from "./schemaUser.js";

const getAllUsers = async () => {
    try {
        const users = await UserModel.find()
        return users
    } catch (error) {
        throw error
    }
}


const getOneUser = async (id) => {
    try {
        const user = await UserModel.findById(id)
        return user
    } catch (error) {
        throw error
    }
}


const createUser = async (newUser) => {

    try {
        const userToCreate = new UserModel(newUser)
        const savedUser = await userToCreate.save()
        return savedUser

    } catch (error) {
        throw error
    }
}


const editUser = async (userToEdit) => {
    try {
        const options = { new: true }
        const editedUser = await UserModel.findByIdAndUpdate(userToEdit.id, UserToEdit, options)
        return editedUser
    } catch (error) {
        throw error
    }
}


const deleteUser = async (id) => {

    try {
        const deletedUser = await UserModel.findByIdAndDelete(id)
        return deletedUser
    } catch (error) {
        throw error
    }

}

export default {
    getAllUsers,
    getOneUser,
    createUser,
    editUser,
    deleteUser
}