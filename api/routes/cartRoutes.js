const { Router } = require('express')
const { addItemToCart, removeCartItems, getCartItems } = require('../controllers/CartControllers')
const { requireSignin, userMiddleware } = require('../middlewares')
const router = Router()
router.post('/user/cart/addtocart',requireSignin,userMiddleware,addItemToCart)
// router.get('/category/getcategory',getCategoryController)
router.post("/user/getCartItems", requireSignin, userMiddleware, getCartItems);
router.post(
    "/user/cart/removeItem",
    requireSignin,
    userMiddleware,
    removeCartItems
  );
module.exports = router