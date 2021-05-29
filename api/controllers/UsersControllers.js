const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer')
const Users = require("../models/usersModel")


exports.signUpController = async (req, res, next) => {
    const { firstName, lastName, username, email, password } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty) { return res.status(422).json({ errors: errors.array().map(e => e.msg)[0] }) }
    const isEmailExist = await Users.findOne({ email })
    const isUserNameExist = await Users.findOne({ username })
    if (isEmailExist) return res.status(400).json({ errors: "E-mail Ya registrado!" })
    if (isUserNameExist) return res.status(400).json({ errors: "Nombre de usuario ya está en uso!" })
    try {
        const token = jwt.sign({
            firstName,
            lastName,
            username,
            email,
            password
        }, process.env.JWT_ACCOUNT_ACTIVATION, {
            expiresIn: "15m"
        })
        var transportador = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: `${process.env.EMAIL}`,
                pass: `${process.env.CLAVE}`
            }
        })
        const mailOptions = {
            from: `${process.env.CORREO}`,
            to: email,
            subject: "Hello",
            html: `
            <h6>Por favor da Click en el Link para activar su cuenta</h6>
            <p>${process.env.CLIENT_URL}users/active/${token}</p>
            <br>
            <p>este email contiene informacion sensible</p>
             <p>${process.env.CLIENT_URL}</p>
             `
        }
        transportador.sendMail(mailOptions, (error, info) => {
            if (error) return res.status(404).json({ errors: error.message })
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
exports.activateController = async (req, res, next) => {
    const { token } = req.body

    if (token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    errors: "El token a expirado."
                })
            } else {
                const { firstName, lastName, username, email, password } = jwt.decode(token)

                const user = new Users({
                    firstName,
                    lastName,
                    username,
                    email,
                    password
                })
                user.save((err, user) => {
                    if (err) {
                        return res.status(401).json({ errors: "El Usuario/correo ya registrado!" })
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
exports.signInController =async (req, res, next) => {
    const {email,connect,password}=req.body
    try {
        const UserAndEmail=email.includes("@")

        Users.findOne(UserAndEmail? {email}:{username:email})
            .exec((error, user) => {
                if (error) return res.status(400).json({ errors:error })
                if (user) {
                    if (user.authenticate(password)) {
                        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                            expiresIn: "24h"
                        })
                        const { firstName, lastName, email,username,role, fullName } = user;
                        res.status(200).json({
                            user: {
                                firstName, lastName,username,email, role, fullName
                            },
                            token
                        })
                    } else {
                        return res.status(400).json({
                            message: 'Contraseña incorrecta!'
                        })
                    }
                } else {
                    return res.status(400).json({ errors: `El ${UserAndEmail?"correo":"usuario"} no se encuentra registrado!` })
                }
            })
    } catch (e) {
        console.log("Si ves esto comunicanos!")
    }
}