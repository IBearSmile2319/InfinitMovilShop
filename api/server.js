const express=require('express'),
morgan = require('morgan'),
bodyParser= require('body-parser'),
cors= require('cors'),
path= require('path');
// --------------------------------
require('dotenv').config();
const app= express();
// Connection to DataBase mongoose
require('./config/dbmongo')
// Use Body-Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan("dev"))

// public paths for images and other extra components
// ....
// load all routes
const usersRoutes = require('./routes/usersRoutes')
// Use to routes
app.use(cors({
    origin:process.env.CLIENT_URL
}))
app.use('/api',usersRoutes);


// configuration for deploy
if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'))
    app.use(morgan('tiny'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
app.use((req,res)=>{
    res.status(404).json({
        success:false,
        message:"Pagina no encontrada"
    })
})

const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}!`)
})