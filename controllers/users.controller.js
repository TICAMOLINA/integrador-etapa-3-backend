
const getAll = async (req, res) => {
    console.log('getAll')
    res.send('getAll')
}

const getOne = async (req, res) => {
    console.log('getOne')
    res.send('getOne')
}

const create = async (req, res) => {
    console.log('create')
    res.send('create')
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