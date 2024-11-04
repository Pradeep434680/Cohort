import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'
// import { json } from 'express';

function App() {
  const [todos, setTodos] = useState([]);
 
  
  fetch('http://localhost:3000/todos')
  .then(async (res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const json = await res.json();
    console.log(json.todos);
    setTodos(json.todos);
  })
  .catch((err) => {
    console.error('Fetch error:', err);
  });


  

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
