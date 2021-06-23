const express = require('express');
const { requireSignin, userMiddleware } = require('../middlewares');
const { addAddress, getAddress } = require('../controllers/AddressControllers');
const router = express.Router();


router.post('/user/address/create', requireSignin, userMiddleware, addAddress);
router.post('/user/getaddress', requireSignin, userMiddleware, getAddress);

module.exports = router;