const { Router } = require('express')
const { addCategoryController, getCategoryController } = require('../controllers/CategoryControllers')
const { requireSignin, adminMiddleware } = require('../middlewares')
const router = Router()

const multer=require('multer')
const path=require('path')
const shortid=require('shortid')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:(req,file,cb)=>{
        cb(null,shortid.generate()+ "-"+file.originalname)
    }
})
const upload=multer({storage})

router.post('/category/create',
requireSignin,
adminMiddleware,
upload.single('categoryImage'),
addCategoryController)

router.get('/category/getcategory',getCategoryController)
module.exports = router