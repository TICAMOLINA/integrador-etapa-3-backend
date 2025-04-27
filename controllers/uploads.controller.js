
const uploadImage = (req, res) => {
    const image = req.file
    console.log(image);

    if (!image) {
        return res.status(400).json({
            mensaje: 'No se cargó la imagen necesaria'
        })
    }

    const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${image.filename}`
    
    res.status(201).json({
        foto: urlCompletaBack
    })
}

export default {
    uploadImage
}