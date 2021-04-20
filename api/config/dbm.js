const mongoose=require('mongoose')

const ConnectDB=async()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URL,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        })
        console.log(`MongoDB connected: ${connection.connection.host}`)
        
    } catch (e) {
        console.log(`[!] Error al conectarse a la base de datos: ${e}`)
    }
    
}
module.exports=ConnectDB