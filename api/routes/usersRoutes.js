const {Router} = require('express')
const { signInController, signUpController, activateController } = require('../controllers/UsersControllers')
const router=Router()

router.post('/signin',signInController)
router.post('/signup',signUpController)
router.post('/activate',activateController)

module.exports=router