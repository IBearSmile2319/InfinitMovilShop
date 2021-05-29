const {model,Schema} = require('mongoose')
const bcrypt = require('bcrypt')
const UsersSchema=new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:50
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
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin',"employee"],
        default:'user'
    },
    contactNumber:{
        type:String
    },
    profilePicture:{type:String}

},{timestamps:true})

UsersSchema.virtual('password')
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,10)
})
UsersSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});
UsersSchema.methods={
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hash_password)
    }
}

module.exports= model('Users',UsersSchema)