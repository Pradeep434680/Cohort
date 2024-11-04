const mongoose = require('mongoose');
const { boolean } = require('zod');
mongoose.connect('mongodb+srv://prrajpoot12234:HwRz2CJt4WrcWJuK@cluster0.4zk98.mongodb.net/todos')

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    isCompleted:Boolean
})
const Todo =  mongoose.model("Todo",todoSchema);
module.exports={
    Todo
}