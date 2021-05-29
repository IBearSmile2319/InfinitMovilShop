const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then((e) => {
    console.log(`MongoDB connected: ${e.connection.host}`)
}).catch((err) => {
    console.log(`[!] Error al conectarse a la base de datos: ${err}`)
})