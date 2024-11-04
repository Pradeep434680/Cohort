// zod related work will be here
const zod = require('zod');

const createTodo = zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo = zod.object({
    id:zod.string()
})

module.exports ={
    createTodo:createTodo,
    updateTodo:updateTodo
}