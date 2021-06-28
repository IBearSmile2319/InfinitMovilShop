const { Router } = require('express')
const { addProductController, getProductBySlug, deleteProductById, getProducts, getProductDetailsById, getProductByCategory } = require('../controllers/ProductControllers')
const { requireSignin, adminMiddleware, upload } = require('../middlewares')
const router = Router()

router.post('/product/create',
requireSignin, 
adminMiddleware,
upload.array('productPictures'),
addProductController
)
router.get('/products/:slug',getProductBySlug)
router.get('/products/category/:category',getProductByCategory)
// router.get('/product/getproduct')
router.get("/product/:productId", getProductDetailsById);
router.delete(
  "/product/deleteProductById",
  requireSignin,
  adminMiddleware,
  deleteProductById
);
router.post(
  "/product/getProducts",
  requireSignin,
  adminMiddleware,
  getProducts
);
module.exports = router