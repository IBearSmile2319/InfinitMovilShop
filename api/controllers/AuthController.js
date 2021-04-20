const User = require('../models/UserModel'),
    { validationResult } = require('express-validator'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    nodemailer = require('nodemailer')

exports.SignupController = async (req, res, next) => {
    const { firstname, lastname, username, email, password } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty) {
        const firstError = errors.array().map(e => e.msg)[0]
        return res.status(422).json({
            errors: firstError
        })
    }
    const isEmailExist = await User.findOne({ email })
    if (isEmailExist) return res.status(400).json({ erros: 'E-mail Ya registrado' })

    try {
        const token = jwt.sign({
            firstname,
            lastname,
            username,
            email,
            password
        }, process.env.JWT_ACCOUNT_ACTIVATION, {
            expiresIn: '20m'
        })
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: `${process.env.CORREO}`,
                pass: `${process.env.CLAVE}`
            }
        })
        const mailOptions = {
            from: `${process.env.CORREO}`,
            to: email,
            subject: "Hello",
            html: `
            <h6>Por favor da Click en el Link para activar su cuenta</h6>
            <p>${process.env.CLIENT_URL}/users/active/${token}</p>
            <br>
            <p>este email contiene informacion sensible</p>
             <p>${process.env.CLIENT_URL}</p>
            `
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(404).json({
                    errors: error.message
                })
            }
        })
        return res.status(200).json({
            message: `E-mail de activación enviado a ${email}!`,
            token
        })
    } catch (e) {
        return res.status(400).json({
            errors: e.message
        })
    }
}
// Activation and save

exports.activateController = async (req, res) => {
    const { token } = req.body
    
    if (token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    errors: "El token a expirado."
                })
            } else {
                const { firstname, lastname, username, email, password } = jwt.decode(token)
                
                const user = new User({
                    firstname,
                    lastname,
                    username,
                    email,
                    password
                })
                user.save((err, user) => {
                    if (err) {
                        return res.status(401).json({ errors: "El Usuario/correo ya registrado!"})
                    } else {
                        return res.status(200).json({
                            success: true,
                            message: "Verificado correctamente!",
                        })
                    }

                })
            }
        })

    } else {
        return res.status(404).json({
            errors: "Se produjo un error"
        })
    }
}