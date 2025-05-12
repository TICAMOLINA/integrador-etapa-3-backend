import { v2 as cloudinary } from 'cloudinary'
// import { CloudinaryStorage } from 'multer-storage-cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

/* const storageCloud = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'productos',
        allowed_formats: ['jpg', 'png', 'webp']
    }
}) */

export default cloudinary