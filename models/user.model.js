const mongoose=require('mongoose')
var userSchema=new mongoose.Schema({
  email: {
    desc: "The user's email address.",
    trim: true,
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  password: {
    desc: "user password",
    trim: true,
    type: String,
    required: true,
    select: false,
  },
  name: {
    desc: "The user's name.",
    trim: true,
    type: String,
    required: true,
  },
  age: {
    desc: "The users's age.",
    type: Number,
  },
  gender: {
    desc: "user gender.",
    trim: true,
    type: String,
    enum: ["Male", "Female", "Others"],
    default: "Others",
    required: true,
  },
  isActive: {
    desc: "is Active.",
    type: Boolean,
    default: true,
    required: true,
  },
  userType: {
    desc: "user roles.",
    trim: true,
    type: String,
    enum: ["Admin", "User"],
    default: "Admin",
    required: true,
  },
}) 
module.exports=mongoose.model('User',userSchema)