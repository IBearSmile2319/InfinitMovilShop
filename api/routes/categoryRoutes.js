const { Router } = require('express')
const { addCategoryController, getCategoryController,updateCategoriesController, DeleteCategoriesController } = require('../controllers/CategoryControllers')
const { requireSignin, adminMiddleware, upload } = require('../middlewares')
const router = Router()


router.post('/category/create',
requireSignin,
adminMiddleware,
upload.single('categoryImage'),
addCategoryController)

router.get('/category/getcategory',getCategoryController)
router.post('/category/update',requireSignin,adminMiddleware,updateCategoriesController)
router.post('/category/delete',requireSignin,adminMiddleware,DeleteCategoriesController)
module.exports = router