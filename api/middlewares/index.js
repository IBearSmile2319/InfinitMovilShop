const jwt = require('jsonwebtoken')

exports.requireSignin = (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user;
        
    } else{
        return res.status(400).json({message:"Reguieres autorización"})
    }
    next()
}

exports.userMiddleware = (req, res, next) => {
    const { role } = req.user
    if (role !== 'user') {
        return res.status(400).json({ message: 'user acceso denegado' })
    }
    next()
}
exports.adminMiddleware = (req, res, next) => {
    const { role } = req.user
    if (role !== 'admin') {
        return res.status(400).json({ message: 'admin Acceso denegado' })
    }
    next()
}