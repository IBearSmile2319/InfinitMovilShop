const { Router } = require('express')
const { addBannerController, getBannersController } = require('../controllers/BannerController')
const { requireSignin, adminMiddleware, upload } = require('../middlewares')
const router = Router()

router.post('/banners/create',
    requireSignin,
    adminMiddleware,
    upload.single('banners'),
    addBannerController
)
router.get('/banners/getbanners',getBannersController)
module.exports = router