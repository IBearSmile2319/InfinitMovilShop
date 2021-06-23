const { Router } = require('express')
const { AddLocalizationController } = require('../controllers/LocalizationController')
const router=Router()

router.post('/Localization/add',AddLocalizationController)



module.exports = router