const { Router } = require('express')
const { signInController, signUpController, activateController, profileController } = require('../controllers/UsersControllers')
const { requireSignin } = require('../middlewares')
const { validateSignupRequest,validateSigninRequest,isRequestValidated } = require('../validators/usersValidator')
const router = Router()
router.post('/signin',validateSigninRequest,isRequestValidated,signInController)
router.post('/signup',validateSignupRequest,isRequestValidated,signUpController)
router.post('/activate', activateController)
router.post('/profile',requireSignin,profileController)

module.exports = router