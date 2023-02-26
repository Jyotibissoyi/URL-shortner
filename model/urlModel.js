const mongoose = require("mongoose");


const URLSchema= new mongoose.Schema({


     urlCode:{
        type:String,
        require:true,
        unique:true,
        //lowercase:true,
        trim:true
     },
     longUrl:{
        type:String,
        require:true,
        unique:true,
        //lowercase:true,
        trim:true

     },
     shortUrl:{
        type:String,
        require:true,
        unique:true,
        //lowercase:true,
        trim:true
     }
},{timestamps:true});







module.exports= mongoose.model("url",URLSchema)