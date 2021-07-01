const { check, validationResult } = require('express-validator');

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('Nombres es requerido'),
    check('lastName')
    .notEmpty()
    .withMessage('Apellidos es requerido'),
    check('lastName'),
    check('email')
    .isEmail()
    .withMessage('Se requiere que use un E-mail valido'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener mas de 6 caracteres')
];

exports.validateSigninRequest = [
    check('email')
    .notEmpty()
    .withMessage('username/E-mail es requerido'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener mas de 6 caracteres')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ errors: errors.array()[0].msg })
    }
    next();
}