const { Router } = require('express')
const { 
    signInController, 
    signUpController, 
    activateController, 
    profileController, 
    signoutControllers 
} = require('../controllers/UsersControllers')
const { requireSignin } = require('../middlewares')
const { 
    validateSignupRequest,
    validateSigninRequest,
    isRequestValidated 
} = require('../validators/usersValidator')
const router = Router()

router.post(
    '/signin',
    validateSigninRequest,
    isRequestValidated,
    signInController
    )
router.post(
    '/signup',
    validateSignupRequest,
    isRequestValidated,
    signUpController
    )
router.post(
    '/activate', 
    activateController
    )
router.post(
    '/profile',profileController
    )
router.post('/signout',requireSignin,signoutControllers)

module.exports = router