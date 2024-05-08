import mongoose from "mongoose";
const foodSchema=mongoose.Schema({
    CategoryName:String,
    name:String,
    img:String,   
    options:String,
    Half:String,
    Full:String,
    description:String
    
})
const Food=mongoose.model("Food",foodSchema);
export default Food;