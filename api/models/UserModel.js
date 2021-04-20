const {Schema,model}=require('mongoose'),
bcrypt=require('bcrypt')

const UserSchema=new Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:'user'
    },
    contactNumber:{type:String},
    profilePicture:{type:String},
    
},{timestamps:true});
UserSchema.virtual('password')
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,10)
})
UserSchema.method={
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hash_password)
    }
}
module.exports=model('User',UserSchema)