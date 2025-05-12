import multer from "multer"
import storage from "../utils/handle-storage.js"
// import { storageCloud } from "../utils/cloudinary.js"

const uploadsMiddleware = multer( { storage } )

export default uploadsMiddleware