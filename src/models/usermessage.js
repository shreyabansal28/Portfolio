const mongoose=require('mongoose');
const validator=require('validator');
const { default: isEmail } = require('validator/lib/isEmail');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
    },
    email:{
        type:String,
        required:true,
        validator(value)
        {
            if(!validator.isEmail(value))
            throw new Error("Invalid Email Id");
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
    },
    message:{
        type:String,
        required:true,
    },
    date:{
      type:Date,
      default:Date.now
    }
})

const User=mongoose.model("User",userSchema)

module.exports=User;