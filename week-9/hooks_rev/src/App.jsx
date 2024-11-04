import { useEffect, useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

// function App() {
//   const [render,setRender] = useState(true);
//   useEffect(()=>{
//     setInterval(() => {
//       setRender(r=>!r)
//     }, 5000);

//   },[])

//   return (
//     <>
//       {render ?<MyComponent/> : <div></div>}
//     </>
//   )
// }

// functional component
// function MyComponent()
// {
//   useEffect(()=>{
//     console.error("component mounted"); // when ever the first time it 

//     return ()=>{
//       console.log('component unmounted');//when second time the dependency changes it will run first 
      
//     }
//   },[])
//   return <div>
//     inside from the my component
//   </div>
// }

//class based component

// class MyComponent extends React.Component
// {
//   componentDidMount()
//   {
//     console.log('mounted');
    
//   }

//   componentWillUnmount()
//   {
//     console.log('unmounted');
    
//   }
//   render()
//   {
//     return <div>
//       hi there
//     </div>
//   }

// }

function useTodos()
{
  const [todos,setTodo] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/todos')
    .then(res=>
      setTodo(res.data.todos)
    )
  },[])
  return todos
}
//custom hooks
function App()
{
  const todos = useTodos();
  return <div>
    {todos.map(todo =><Track todo={todo}/>)}
  </div>
}
function Track({todo})
{
  return <div>
    {todo.title}
    {todo.description}
  </div>
}

export default App
