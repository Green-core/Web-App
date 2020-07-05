const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signupSchema= new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    gender:{type:String,required:true},
    emailadress:{type:String,required:true},
    password:{type:String,required:true},
    contactno:{type:Number,required:true},
    adress:{type:String,required:true},


});

const Signup = mongoose.model('Signup',signupSchema);
module.exports = Signup;