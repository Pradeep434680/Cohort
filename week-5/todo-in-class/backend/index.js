const express = require('express');
const app = express();
const { createTodo, updateTodo } = require("./types")
const cors = require('cors');
const {Todo}  = require('./db');
app.use(cors(
    {
        origin:'http://localhost:5173'
    }
)); 
app.use(express.json());

app.post("/todo",async(req,res)=>{
    const createPayload = req.body;
    
    
    const parsePayload =  createTodo.safeParse(createPayload);
    if(!parsePayload.success)
    {
        res.status(411).json({
            msg:"you send the wrong inputs"
        })
        return ;
    }
    
    // put todo in the mongodb
    await Todo.create({
        title :createPayload.title,
        description :createPayload.description,
        isCompleted:false
        
    })
    res.json({
        msg:"todo is created"
    })
})
app.get("/todos",async(req,res)=>{
    const allTodos = await Todo.find();
    res.json({
        allTodos
    })

})
app.put("/completed",async(req,res)=>{
    const updatePayload = req.body;
    const newUpdatePayload = JSON.stringify(updatePayload)
    // console.log(typeof(newUpdatePayload));
    
    
    const parsePayload =  updateTodo.safeParse(newUpdatePayload);
    if(!parsePayload.success)
    {
        res.status(411).json({
            msg:"you send the wrong inputs"
        })
        return ;
    }
    await Todo.updateOne({ _id: newUpdatePayload.id }, { isCompleted: true });
    res.json({
        msg:"todo mark as done"
    })

    
})

app.listen(3000,()=>{
    console.log("app is started at port 3000");
    
})