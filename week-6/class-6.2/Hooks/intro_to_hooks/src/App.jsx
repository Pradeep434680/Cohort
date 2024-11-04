
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import axios from "axios"



// code for fetch all todos from the backend
// function App() {
//   const [todos, setTodos] = useState([])
//   useEffect(()=>{
//     fetch("http://localhost:8080/todos")
//     .then(async(res)=>{
//       const json = await res.json();
//       setTodos(json.todos);
//     })
//   },[]);
//   return (
//     <div>
//      {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
//     </div>
//   )
// }
// function Todo({title,description})
// {
//   return <div>
//     <h2>{title}</h2>
//     <h3>{description}</h3>
//   </div>
// }

// code for get a specific todo according to id number

// function App()
// {
//   const [selectedId,setselectedId] = useState(1)

//   return (
//     <div>
//       <button onClick={
//         function(){
//           setselectedId(1)
//         }
//       }> 1 </button>&nbsp;
//       <button onClick={
//         function(){
//           setselectedId(2)
//         }
//       }>2</button>&nbsp;
//       <button onClick={
//         function(){
//           setselectedId(3)
//         }
//       }> 3</button>&nbsp;
//       <Todo id={selectedId}></Todo>
//     </div>
//   )
// }
  
      
// function Todo({id})
// {
//   const [todo,setTodo] = useState({});
//     useEffect(()=>{
//       axios.get(`http://localhost:8080/todo?id=${id}`)
//       .then(response=>{
//         setTodo(response.data.todo)
//       })
//   },[id]);
//   return (  
//     <div>
//       id={id}
//     <h2>{todo.title}</h2>
//     <h3>{todo.description}</h3>
//     </div>
//   )
// }




// make an aap that has a counter btn and also have a input box when i write in the input box
// it will give you the sum of 1-n numbers


//when enver the btn clicked the counter is changed and the whole 
// app component re-renders
//in the app function very expensive for loop 
// function App()
// {
//   const [counter,setCounter] = useState(0)
//   const [inputVal,setInputVal] = useState(1);
//   let count =0;
//   for ( let i=1; i<=inputVal; i++)
//   {
//     count +=i;
//   }
//   return (
//     <div>
//       <input onChange={
//         function(e){
//           setInputVal(e.target.value)
//         }
//       } type="text" placeholder='find the sum 1 to n:'/>
//       <br />
//       sum from 1 to {inputVal} is {count}
//       <br />
//       <button onClick={()=>
//         {
//           setCounter(counter + 1)
//         }
//       }>counter ({counter})</button>
  //   </div>
  // )
// }


// different approach 

// function App()
// {
//   const [counter,setCounter] = useState(0)
//   const [inputVal,setInputVal] = useState(1);
//   const [finalVal,setFinalVal] = useState(0);
//   let count =0;
//  useEffect(()=>{
//   for ( let i=1; i<=inputVal; i++)
//     {
//       count +=i;
//     }
//     setFinalVal(count)
//  },[inputVal])

//   return (
//     <div>
//       <input onChange={
//         function(e){
//           setInputVal(e.target.value)
//         }
//       } type="text" placeholder='find the sum 1 to n:'/>
//       <br />
//       sum from 1 to {inputVal} is {finalVal}
//       <br />
//       <button onClick={()=>
//         {
//           setCounter(counter + 1)
//         }
//       }>counter ({counter})</button>
//     </div>
//   )
// }




// function App()
// {
//   const [counter,setCounter] = useState(0)
//   const [inputVal,setInputVal] = useState(1);
//   let count = useMemo(()=>{
//     let count =0;
//     // console.log("usememo");
    
//       for ( let i=1; i<=inputVal; i++)
//       {
//         count +=i;
//       }
//       return count;

//   },[inputVal])

//   return (
//     <div>
//       <input onChange={
//         function(e){
//           setInputVal(e.target.value)
//         }
//       } type="text" placeholder='find the sum 1 to n:'/>
//       <br />
//       sum from 1 to {inputVal} is {count}
//       <br />
//       <button onClick={()=>
//         {
//           setCounter(counter + 1)
//         }
//       }>counter ({counter})</button>
//     </div>
//   )
// }



// ********** useCallback************
// var a = 1;
// var b=1;
// console.log(a==b);//=> true

// but

// function A()
// {
//   console.log("i am a");
  
// }
// function B()
// {
//   console.log("i am B");
  
// }

// console.log(A==B);// false


// example and requirement of useCallback

// var a =1;
// function App()
// {
//   const [counter,setCounter] = useState(0)

//   // function a()
//   // {
//   //   console.log("hi there");
    
//   // }
//   return(
//     <div>
//       <button onClick={
//         function()
//         {
//           setCounter(counter+1)
//         }
//       }>Counter {counter}</button>
//       <Demo a={a}/>
//     </div>
//   )
// }
// const Demo = memo(({a})=>{
//   console.log("rerender");
//   return <div>
//     hi there {a}
//   </div>
  
// })
// conclusion 
//when a is a variable when a will change then only the memo will re-render but 
//here a is not changing so there is only fisrt re render not always

// but when a is a function then the counter btn is clicked then the demo component is re-rendered 
// to recognose the functions there is hook useCallback

// the useCallback hook is used to memoize functions to prevent unnecessary re-creations of functions on every render


// var a =1;
// function App()
// {
//   const [counter,setCounter] = useState(0)

//   // function a()
//   // {
//   //   console.log("hi there");
    
//   // }
//   // write function in this way
//   const a = useCallback(()=>{
//     console.log("hii there");
    
//   },[])
//   return(
//     <div>
//       <button onClick={
//         function()
//         {
//           setCounter(counter+1)
//         }
//       }>Counter {counter}</button>
//       <Demo a={a}/>
//     </div>
//   )
// }
// const Demo = memo(({a})=>{
//   console.log("rerender");
//   return <div>
//     hi there {a}
//   </div>
  
// })


// other example of useCallback;

// function App()
// {
//   const [count,setCount] = useState(0);
//   return(
//     <div>
//       <ButtonComponene/>
//       <br />
//       <button onClick={
//         ()=>{
//           setCount(count+1)
//         }
//       }>Counter {count}</button>
//     </div>
//   )
// }

// const ButtonComponene = memo(()=>// here memo prevent the other re-renders of Buttoncomponent
// {
//   console.log("child re-render");
  
//   return (
//     <div>
//       <br />
//       <button>Btn clicked</button>
//     </div>
//   )
// })

// when the memo argument will not change it will render the component
// function App()
// {
//   const [count,setCount] = useState(0);
// const  inputFunction= useCallback(()=>
//   {
//     console.log("hii there");
    
//   },[])
//   return(
//     <div>
//       <ButtonComponene inputFunction = {inputFunction}/>
//       <br />
//       <button onClick={
//         ()=>{
//           setCount(count+1)
//         }
//       }>Counter {count}</button>
//     </div>
//   )
// }

// const ButtonComponene = memo(({inputFunction})=>// here the react is not able to recognise that this input function is the same as the 
// {                                               // previous rendered function so it re-renders it again and again
//   console.log("child re-render");
  
//   return (
//     <div>
//       <br />
//       <button>Btn clicked</button>
//     </div>
//   )
// })




//*********************costom hooks********************** */

// the name of custom hooks always start with the use ex- useSomething

// function App()
// {
//   const [todos,setTodos] = useState([]);
//   useEffect(()=>{
//     axios.get("http://localhost:8080/todos")
//     .then((res)=>{
//       setTodos(res.data.todos)
//     })
//   },[])


//   return(
//     // logic for render the todos
//   )
// }

// another method to render the todos using custom hooks

// note - state always written inside the custom hook or the componts
//not inside the normal function
 function useTodos()
 {
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
    axios.get("http://localhost:8080/todos")
    .then((res)=>{
      setTodos(res.data.todos)
    })
  },[])
 }
function App()
{
  const todos = useTodos()
  return <div>
    {todos}
  </div>

}

// notes 
// count btn i want to increase ny two
// setCount(count +1 )
//setcount(count+1)=> this approach will not work because the state will not change very soon
//solution give the funtion inside the setTodos setTodos((c)=>c+1)=> the value that is coming return by adding one
// setTodos((c)=>c+1)
// setTodos((c)=>c+1)




export default App
