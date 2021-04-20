const {Router}=require('express'),
router=Router()
const { SignupController, activateController } = require('../controllers/AuthController')

router.post('/signup',SignupController)
router.post('/activation',activateController)

module.exports=router
