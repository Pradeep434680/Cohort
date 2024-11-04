// prop driling 

import { useState } from "react";

// function App1()
// {
//     const [ count,setCount] = useState(0);
//     return(
//         <div>
//             <Count count = {count}/>
//             <Button count ={count} setCount={setCount}/>
//         </div>
//     )
// }


// function Count({count}){
// return(
//     <div>
//         {count}

//     </div>
// )
// }

// function Button({count,setCount}){
//     return (
//         <div>
//             <button
//             onClick={()=>{
//                 setCount(count=>count+1)
//             }}>Increase</button> &nbsp;
//             <button
//             onClick={()=>{
//                 setCount(count=>count-1)
//             }}>Decrease</button>
//         </div>
//     )

// }



function App1()
// now question is that i want to set the btn componet inside the count component
{
    const [ count,setCount] = useState(0);
    return(
        <div>
            <Count count = {count} setCount={setCount}/>
        </div>
    )
}

// now here is setcount is not recognise by the count function

// here the count function is passing the props only it has no use of the setCount 
function Count({count,setCount}){
return(
    <div>
        {count}
        <Button count ={count} setCount={setCount}/>

    </div>
)
}

function Button({count,setCount}){
    return (
        <div>
            <button
            onClick={()=>{
                setCount(count=>count+1)
            }}>Increase</button> &nbsp;
            <button
            onClick={()=>{
                setCount(count=>count-1)
            }}>Decrease</button>
        </div>
    )

}


export default App1;