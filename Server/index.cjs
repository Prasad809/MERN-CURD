const express=require("express")
const cors=require("cors")
let app=express()
app.use(express.json())
app.use(cors())
const StdModel =require('./mongodb.cjs')

//Creating Post Data
app.post('/createStd',function(req,res){
    StdModel.create(req.body)
    .then(students =>res.json(students))
    .catch(err=>res.json(err))
})
//Getting data
app.get("/",function(req,res){
    StdModel.find({})
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})
//gettind Data By Id
app.get('/getStd/:id',function(req,res){
    let id=req.params.id
    StdModel.findById({_id:id})
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})
//Updating data 
app.put('/updateStd/:id',(req,res)=>{
    let id=req.params.id
    //let {name,email,age}=req.body;
    //StdModel.findByIdAndUpdate({_id:id},{name,email,age})
    StdModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})
//Delete data
app.delete('/deleteStd/:id',(req,res)=>{
    let id=req.params.id
    StdModel.findByIdAndDelete({_id:id})
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})
app.listen(3030,function(){
    console.log("Server Running........at 3030");
})