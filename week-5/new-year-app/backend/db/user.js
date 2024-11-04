const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://prrajpoot12234:HwRz2CJt4WrcWJuK@cluster0.4zk98.mongodb.net/Todo_all');
 
const userSchema =new mongoose.Schema({
    username:String,
    password:String,
    allTodos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Todo'
    }]
});
   
    

const todoSchema = new mongoose.Schema({
    isCompleted:Boolean,
    title:String,
    description:String
})

const User = mongoose.model("User",userSchema);
const Todo = mongoose.model("Todo",todoSchema);
module.exports = { User,Todo };