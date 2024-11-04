
import { useContext, useState } from "react";
import { CountContext } from "./context";
import { useRecoilState, useRecoilValue ,RecoilRoot,useSetRecoilState} from "recoil";
import {countAtom, evenSelector} from './store/atoms/count'

// in this code you will find that in count component there is not state variable changed yet it 
// also re-render to prevent it 
// see console window
// recoil

// what is recoil=>in recoil only those component will be rendered in which state is changed

// function App2()
// {
//     const [ count,setCount] = useState(0);
//     console.log("parent");
    
//     return(
//         <div>
//             <CountContext.Provider value={count}>
//                 <Count setCount={setCount} />
//             </CountContext.Provider>
//         </div>
//     )
// }

// //here is not count change still it is re-ender
// function Count({setCount}){
//     console.log('count re-render')
    
//     return(
//     <div>
//         <CountRenderer  />
//         <Button setCount={setCount}/>

//     </div>
// )
// }
//  function CountRenderer()
//  {
//     console.log('counter render=');
    
//     const count = useContext(CountContext)
//     return <div>
//         {count}
//     </div>
//  }
// function Button({setCount}){
//     console.log('btn re-render');
    
//     const count = useContext(CountContext)
    
//     return (
//         <div>
//             <button
//             onClick={()=>{
//                 console.log("increase");
                
//                 setCount(count=>count+1)
//             }}>Increase</button> &nbsp;
//             <button
//             onClick={()=>{
//                 console.log('decrease');
                
//                 setCount(count=>count-1)
//             }}>Decrease</button>
//         </div>
//     )

// }



function App2()
{
  
    console.log("app");
    
    
    return(
        <div>
          <RecoilRoot>
              <Count />
          </RecoilRoot>
        </div>
    )
}


function Count(){
    console.log('count re-render')
    
    return(
    <div>
        <CountRenderer  />
        <Button/>

    </div>
)
}
 function CountRenderer()// this componenent only wants to read the value of count not logic of updation 
 {
   
    console.log('count redner');
    
    const count =useRecoilValue(countAtom);
    // you can also write it when both is required
    // const [count,setCount] = useRecoilState(countAtom);
    return <div>
        {count}
        <EvenCounterRenderer/>
    </div>
 }
function EvenCounterRenderer()
{
    const isEven =useRecoilValue(evenSelector);

    return <div>
        {(isEven %2==0)?"it is even":null}
    </div>
    
}
 // btn is not changing but they are render
function Button(){
    // console.log('btn re-render');
    
    // const [count,setCount] = useRecoilState(countAtom);
    const setCount = useSetRecoilState(countAtom);
    console.log("btn re-render");
    
    return (
        <div>
            <button
            onClick={()=>{
                
                
                setCount(count=>count+1)
            }}>Increase</button> &nbsp;
            <button
            onClick={()=>{
               
                
                setCount(c=>c-1)
            }}>Decrease</button>
        </div>
    )

}

// now only those components will render that is changes only
// question arise when we will use the state
// function Input()
// {
//   const [input,setInput] = useState("");
//   return <div>
//     <input onChange={(e)=>{
//       setInput(e.target.value)
//     }} type="text" />
//   </div>
// }

// when the state is passed inside itself or one child only use the state


export default App2;

