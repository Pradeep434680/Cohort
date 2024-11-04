import { useState } from "react"
import React from "react";
// this code -> re-render all components that are present inside the App() function
// this is the second sol using react.memo
// core solution is in the last of page

function App() {
  const [title,setTitle] = useState("my name is pradeep");
function updateTitle()
{
  setTitle("my name is "+ Math.random())
}

  return (
    <div>
      <button onClick={updateTitle}>click me to change title</button>
      <Header title={title}></Header>
      <Header title="kumar"></Header>
      <Header title="jdsj"></Header>
      <Header title="kdssjkumar"></Header>
      <Header title="kudhfmar"></Header>
    </div>
  )
}
const Header = React.memo(function Header({title})
{
  return <div>
      {title}
    </div>
}
)

// this is the good solution
//this will decrese the re-renders
//  function App()
//  {
//   return(
//     <>
//       <HeaderWithButton></HeaderWithButton>
//       <Header title="pradeep kumar"></Header>
//       <Header title="rahul kumar"></Header>
//       <Header title="kksdfi kumar"></Header>
//     </>
//   )
//  }
//  function HeaderWithButton()
//  {
//   const [firsttitle,setFirsttitle] = useState("my name is pradeep");
//   function changeTitle()
//   {
//     setFirsttitle("my name is "+ Math.random());
//   }
//   return (
//     <>
//     <button onClick={changeTitle}>click me to change the first title</button>
//     <Header title = {firsttitle}></Header>
//     </>
//   )
//  }

//  function Header({title})
//  {
//   return <div>
//     {title}
//   </div>
//  }

export default App
