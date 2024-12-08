const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/college").then(()=>{
    console.log("success");

})
//creating Schema
const StdSchema=new mongoose.Schema({
    // name:String,
    // email:String,
    // age:Number
    name:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    age:{
        type:String,
        unique:false
    }
})
//collection name in String then Schema
const StdModel=new mongoose.model("student",StdSchema)
module.exports = StdModel;


