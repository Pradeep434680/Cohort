import { getClient } from "./utils";
async function updateTodo(todoId :number) {
    const client =await getClient();
    const updateTodoText = 'UPDATE todos SET done';
    await client.query(updateTodoText,[true,todoId]);
    console.log(`Todo with ID ${todoId} updated to done!`);

}
const todoIdToUpdate = 1;
updateTodo(todoIdToUpdate);