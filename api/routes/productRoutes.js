const { Router } = require('express')
const { addProductController } = require('../controllers/ProductControllers')
const { requireSignin, adminMiddleware } = require('../middlewares')
const path=require('path')
const multer=require('multer')

const shortid=require('shortid')

const router = Router()

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:(req,file,cb)=>{
        cb(null,shortid.generate()+ "-"+file.originalname)
    }
})
const upload=multer({storage})

router.post('/product/create',
requireSignin, 
adminMiddleware,
upload.array('productPictures'),
addProductController
)
// router.get('/product/getproduct')
module.exports = router