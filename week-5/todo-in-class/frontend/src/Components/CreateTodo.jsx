import { useState } from "react";

export function CreateTodo()
{

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div>
        <input style={{padding:8,
        margin:5,
        width:150
        }} type="text" placeholder="title" onChange={(e)=>{
            // console.log(e.target.value);
            setTitle(e.target.value)
            
        }} /> <br /><br />

        <input  style={{padding:8,
        margin:5,
        width:150
        }} type="text" placeholder="description" onChange={(e)=>{
            // console.log(e.target.value);
            setDescription(e.target.value)
            
        }} /> <br /><br />

        <button style={
            {
                marginLeft:50,
             padding:5
             }
         } onClick={async()=>{
            fetch('http://localhost:3000/todo', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  title: title,
                  description: description
                })
              })
              .then(async (res) => {
                if (!res.ok) {
                  throw new Error(`HTTP error! status: ${res.status}`);
                }
                const json = await res.json();
                alert('Todo added');
              })
              .catch((err) => {
                console.error('Error adding todo:', err);
                alert('Failed to add todo');
              });
              
         }}>add a todo</button> <br /><br />
    </div>
}