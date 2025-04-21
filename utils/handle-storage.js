import path from 'node:path'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const storagePath = path.join('public', 'uploads')
        cb(null, storagePath)
    },
    filename: function(req, file, cb) {
        const extension = file.originalname.split('.').pop()
        const fileName = `${uuidv4()}.${extension}`
        cb(null, fileName
        )
    }
})

export default storage