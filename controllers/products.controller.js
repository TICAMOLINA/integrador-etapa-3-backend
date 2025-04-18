const getAll = (req, res) => {
    res.send('GET ALL')
}

const getOne = (req, res) => {
    const id = req.params.id
    console.log(id);
    res.send('GET ONE')
}

const create = (req, res) => {
    const productoACrear = req.body
    console.log(productoACrear);
    res.send('CREATE producto')
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