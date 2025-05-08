import { unlink } from 'node:fs/promises'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const deleteImgfromBackend = async (deletedProduct) => {
    if (!deletedProduct) return
    const placeholderImg = 'elementor-placeholder-image-3.webp'

    const deleteImage = async (imageUrl) => {
        if (!imageUrl) return

        const imgName = path.basename(imageUrl)

        if (imgName !== placeholderImg) {
            const pathImage = path.join(__dirname, '..', 'public', 'uploads', imgName)            
            try {
                await unlink(pathImage)
                console.log('Imagen borrada:', imgName)
            } catch (err) {
                    console.log('Error al intentar borrar la imagen:', err)
            }
        }
    } 

    await deleteImage(deletedProduct.foto)
    await deleteImage(deletedProduct.sliderFoto)
}

export default deleteImgfromBackend