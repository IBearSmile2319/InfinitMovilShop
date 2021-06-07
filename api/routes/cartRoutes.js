const { Router } = require('express')
const { addItemToCart } = require('../controllers/CartControllers')
const { requireSignin, userMiddleware } = require('../middlewares')
const router = Router()
router.post('/user/cart/addtocart',requireSignin,userMiddleware,addItemToCart)
// router.get('/category/getcategory',getCategoryController)
module.exports = router