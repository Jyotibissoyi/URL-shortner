const express = require('express');
const mongoose = require('mongoose');
const route = require('./router/route')
const app = express();

app.use(express.json());
const DB="mongodb+srv://Jyoticoder:Jyoti2025@jyoticoder-cluster.ljxxb2x.mongodb.net/coder"

mongoose.connect(DB, {useNewUrlParser : true})
.then(()=>{ console.log("MongoDb connected😎😎")})
.catch(err=>{ console.log(err)});

mongoose.set('strictQuery', true);

app.use("/",route)

app.listen(process.env.PORT || 3000, ()=>{
    console.log('running on port'+ (process.env.PORT || 3000))
});