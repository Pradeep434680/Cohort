// whenever state changes react rerender the components
//but react does not know that this is state
// in react there is a special method to declear the states
// let state =
// {
//   count :0
// }
import { useState } from "react";

// function App() {
//   const [count,setCount]=useState(0);
//   function counterHandelar()
//   {
//     setCount(count+1);
//   }
//   return (
//     <div>
//       <button onClick={counterHandelar}>counter {count}</button>
//     </div>
//   )
// }


//**********Reuseable code */
function App()
{
  const [count ,setCount]= useState(0);
  return (
  <div>
    <CustomButton count={count+5} setCount = {setCount}></CustomButton>
   <CustomButton count={count} setCount = {setCount}></CustomButton>
   <CustomButton count={count-5} setCount = {setCount}></CustomButton>
  </div>

  )
  
}
function CustomButton(props)
{

  function onClickHandler(){
    props.setCount(props.count+1);
  }
  return <button onClick={onClickHandler}>counter {props.count}</button>
}

export default App
