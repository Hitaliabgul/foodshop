import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Route from './Routes/Route.js'
import Userroute from './Routes/Userroute.js'
import cors from 'cors'
dotenv.config()
const app=express();
app.use(cors())//middleware
app.use(express.json())
const PORT=process.env.PORT || 4000;
const URL=process.env.mongoDBURL;
try {
    
    mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log("connected to mongodb")
} catch (error) {
    console.log(error);
}
app.use("/food",Route)
app.use("/user",Userroute)
app.listen(PORT,()=>{
    console.log(`application is running on port ${PORT}`)
})