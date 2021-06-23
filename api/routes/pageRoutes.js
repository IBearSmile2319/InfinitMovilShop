const { Router } = require('express')
const { createPage, getPage } = require('../controllers/PageControllers')
const { upload, requireSignin, adminMiddleware } = require('../middlewares')
const router = Router()

router.post('/page/create',requireSignin,adminMiddleware, upload.fields(
    [
        { name: 'banners' },
        { name: 'products' }
    ]
), createPage)

router.get('/page/:category/:type',getPage)

module.exports = router