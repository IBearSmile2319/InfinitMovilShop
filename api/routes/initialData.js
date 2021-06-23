const { Router } = require('express')
const { initialDataControllers } = require('../controllers/InitialData.Controllers')
const router = Router()

router.post('/initialData',initialDataControllers)

module.exports = router