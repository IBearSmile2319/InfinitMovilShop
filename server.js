const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path');
// --------------------------------
require('dotenv').config();
const app = express();
// Connection to DataBase mongoose
require('./api/config/dbmongo')
// Use Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/public', express.static(path.join(__dirname, 'api/uploads')))
// public paths for images and other extra components
// ....
// load all routes
const usersRoutes = require('./api/routes/usersRoutes')
const categoryRoutes = require('./api/routes/categoryRoutes')
const productRoutes = require('./api/routes/productRoutes')
const cartRoutes = require('./api/routes/cartRoutes')
const InitialDataRoutes = require('./api/routes/initialData');
const LocalizationRoutes = require('./api/routes/LocalizationRoutes');
const pageRoutes = require('./api/routes/pageRoutes');
const orderRoutes = require('./api/routes/orderRoutes');
const addressRoutes = require('./api/routes/addressRoutes');
const bannersRoutes = require('./api/routes/bannersRoutes');
// Use to routes
app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use('/api', usersRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)
app.use('/api', InitialDataRoutes)
app.use('/api', LocalizationRoutes)
app.use('/api', pageRoutes)
app.use('/api', orderRoutes)
app.use('/api', addressRoutes)
app.use('/api', bannersRoutes)

// configuration for deploy
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Pagina no encontrada"
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
})
