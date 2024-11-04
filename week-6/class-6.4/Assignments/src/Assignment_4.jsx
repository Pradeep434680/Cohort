import { useCallback, useState ,memo} from "react";
// useCallback hook

function Assignment_4()
{
    const [count,setCount] = useState(0);
    const handleIncrement=useCallback(()=>{
        setCount(function(currVal){
            return currVal+1;
        });
    },[])
    const handleDecrement=useCallback(()=>{
        setCount(function(currVal){
            return currVal-1;
        });
    },[])
    
       
    

    return(
       <div>
         <p>Count:{count}</p>
         <CounterButton onIncrement={handleIncrement}  onDecrement={handleDecrement}/>
       </div>
    )

}
const CounterButton = memo(({onIncrement,onDecrement})=>(
<div>
    <button onClick={onIncrement}>Increment</button>
    &nbsp;&nbsp;

    <button  onClick={onDecrement}>decrement</button>
</div>
))
    
    
export default Assignment_4;