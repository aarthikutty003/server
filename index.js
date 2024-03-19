const express = require('express');
const  mongoose  = require('mongoose');
const cors=require('cors');
const bodybarser=require('body-parser')

const app = express();
app.use(cors())
app.use(express.json())

app.get("/",function(req,res){
    res.send("<h1>Welcome</h1>")
    //fetch
    
})

app.get('/data',function(req,res)

    {
      
        Data.find().then((item)=>res.send(item))
    }
    )

app.post('/create',function(req,res)
    {
        console.log(req.body);
        Data.create(req.body).then((item)=>res.send(item))}
)

app.put('/update/:id',(req,res)=>{

   console.log(req.params.id);
    Data.findByIdAndUpdate({_id:req.params.id},req.body).then((response)=>{console.log(response)
        res.send(response)
    })
})

app.delete('/delete/:id',(req,res)=>{
    console.log('Hello');
    console.log(req.params.id);
    Data.findByIdAndDelete({_id:req.params.id}).then((res)=>console.log(res))
})

app.listen(8081,()=>{
    console.log("server started !!");
})

mongoose.connect("mongodb+srv://Aarthi:Aarthi@cluster0.hqjnpz9.mongodb.net/mca").then(console.log("MongoDB conected"))

var newSchema=new mongoose .Schema({
  name :String,  
  email :String,  
  password :String,  
  amount :Number  
})


//model

let Data =mongoose.model('mca',newSchema)

// //create a data for testing

// let data1= new Data({
//     name :"Aarthi",  
//   email :"aarthisuwat@gmail.com",  
//   password :"123",  
//   amount :1000 
// })

// //save data

// data1.save()

