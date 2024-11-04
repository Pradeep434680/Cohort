const express = require('express');
const userMiddleware = require("./middleware/user")
const jwt = require("jsonwebtoken")
const bodyParser= require("body-parser");
const { User ,Todo}= require("./db/user");
const { JWT_SECRET } = require("./config")
const app = express();
const port = 3030;
app.use(express.json());

app.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{await User.create({
        username,
        password
    })
    res.json({
        msg:"user created successfully"
    })}
    catch(err){
        res.json({
            msg:"user not created dueto some issue"
        })
    }
})



app.post("/signin",async(req,res)=>{
    const username =req.body.username;
    const password = req.body.password;
    const user =await User.findOne({
        username,
        password
    })
    if(user)
    {
        const token = jwt.sign({username},JWT_SECRET);
        res.json({
            token:token
        })
    }
    else{
        res.status(411).json({
            msg:"Incorrect email and password"
        })
    }
})




app.post("/todo",userMiddleware,async(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    try{
        const newTodo = await Todo.create({
            title,
            description,
            isCompleted:false
    
        });
        console.log(req.username);
        
        await User.findOneAndUpdate({username:req.username},{$push: { allTodos: newTodo._id }})
        res.json({
            msg:"Todo added to user successfully "
        })
    }
    catch(error){
        res.status(411).send("todo not added")

    }

})


app.get("/todos",async(req,res)=>{
    const allTodo =  await Todo.find();
    res.json({
        allTodos : allTodo
    })
})
app.put("/completed",(req,res)=>{


})

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
    
})