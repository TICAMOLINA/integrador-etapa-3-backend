
const uploadImage = (req, res) => {
    const image = req.file
    console.log(image);

    if (!image) {
        return res.status(400).json({
            mensaje: 'No se cargó la imagen necesaria'
        })
    }

    res.json({
        foto: image.filename
    })
}

export default {
    uploadImage
}