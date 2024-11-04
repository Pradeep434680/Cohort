// context apis?
//it helps the pass state variables btw components without prop driling from top to bottom
import { useContext, useState } from "react";
import { CountContext } from "./context";
//wrap anyone that wants to use the teleported value inside the provider
function App2()
{
    const [ count,setCount] = useState(0);
    console.log("parent");
    
    return(
        <div>
            <CountContext.Provider value={{count,setCount}}>
                <Count  />
            </CountContext.Provider>
        </div>
    )
}

// now here is setcount is not recognise by the count function

// here the count function is passing the props only it has no use of the setCount 
function Count(){
    console.log('count re-render')
    
    return(
    <div>
        <CountRenderer  />
        <Button />

    </div>
)
}
 function CountRenderer()
 {
    console.log('counter render=');
    
    const {count} = useContext(CountContext)// now contextCount value can be excess directly from the wraped component
    return <div>
        {count}
    </div>
 }
function Button(){
    console.log('btn re-render');
    
    const {count,setCount} = useContext(CountContext)
    
    return (
        <div>
            <button
            onClick={()=>{
                console.log("increase");
                
                setCount(count=>count+1)
            }}>Increase</button> &nbsp;
            <button
            onClick={()=>{
                console.log('decrease');
                
                setCount(count=>count-1)
            }}>Decrease</button>
        </div>
    )

}


export default App2;

// tree for the following code
    //         0  (App2)      

    //         0 (count)


    // 0(CR)           0(btn)
// now motive is :pass the state count variable to the btn and CR components 
// without sending to the count component