const express=require('express'),
morgan = require('morgan'),
bodyParser= require('body-parser'),
cors= require('cors'),
ConnectDB= require('./config/dbm'),
path= require('path');
// --------------------------------
const app= express();
require('dotenv').config();
// Connection to DataBase mongoose
ConnectDB()
// Use Body-Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// public paths for images and other extra components
// ....
// load all routes
// Use to routes
app.use('/api',UserRoutes);
// configuration for deploy
app.use(morgan('dev'));
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

const PORT=process.env.PORT||3001
app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}!`)
})