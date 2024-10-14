const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'public/txt')
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

module.exports = multer({storage})