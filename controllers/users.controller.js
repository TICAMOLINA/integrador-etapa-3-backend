import models from '../models/users.model.js'

const getAll = async (req, res) => {
    console.log('getAll')
    res.send('getAll')
}

const getOne = async (req, res) => {
    console.log('getOne')
    res.send('getOne')
}

const create = async (req, res) => {
    // Faltan hacer validaciones
    const newUser = req.body
    try {
        const createdUser = await models.createUser(newUser)
        res.status(201).json(createdUser)      
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'No se pudo crear el usuario'
        })
    }
}

const update = async (req, res) => {
    console.log('update')
    res.send('update')
}

const remove = async (req, res) => {
    console.log('remove')
    res.send('remove')
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}