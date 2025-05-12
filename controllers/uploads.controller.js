import cloudinary from "../utils/cloudinary.js";
import fs from 'node:fs'

/* const uploadImage = (req, res) => {
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
} */

const uploadImageCloud = async (req, res) => {
    try {
        const filePath = req.file.path

        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'productos'
        })

        fs.unlinkSync(filePath)

        res.json({ foto: result.secure_url })
    } catch (error) {
        console.error('[uploadImageCloud]', error)
        res.status(500).json({ mensaje: 'Error al Subir la imagen'})
    }
}

export default {
    // uploadImage,
    uploadImageCloud
}