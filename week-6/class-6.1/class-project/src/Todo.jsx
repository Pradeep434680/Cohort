import { useState } from "react"
let counter= 4;
function Todo()
{
    const [todo,setTodo] = useState([
        {title:"go to gym",description:"go to gym at 7 pm",id:1},
        {title:"go to bath",description:"bath 7 am everydat",id:2},
        {title:"read DSA",description:"from 8-12am",id:3}]);
    
    const [newTitle,setNewTitle] = useState("");
    const [newDescription,setNewDescription] = useState("");

    function clickHandler()
    {
        const newTodo = {
            title:newTitle,
            description:newDescription,
            id:counter++, 
        }
        setTodo([...todo,newTodo])
    }

        return(
            <div>
                <h1>Todo appliaction</h1>
                <input 
                type="text"  
                placeholder="Enter title"
                onChange={(e)=>{
                    setNewTitle(e.target.value)
                }}/>
                <br /><br />
                <input 
                type="text"  
                placeholder="Enter description"
                onChange={(e)=>{
                    setNewDescription(e.target.value)
                }} />
                <br /><br />
                <button onClick={clickHandler}>Add todo</button>
                {todo.map((item) => (
               <OneTodo title={item.title} description={item.description} key={todo.id} />
      ))}
            </div>
        )

    
}

function OneTodo({title,description})
{
   
        return <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    
}
export default Todo