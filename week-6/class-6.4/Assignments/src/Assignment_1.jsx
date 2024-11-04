// in this assignment your task is to create a component that performs an expensive calculation
//(finding the factorial based on user input)
//use useMemo to ensure that the calculation is only compute when the user input changes not on every re-render
import { useState ,useMemo} from "react";
function Assignment1()
{
    const [input,setInput] = useState(1);
    const calculatedVal = useMemo(()=>{
        let fact =1;
        for( let i=1; i<=input; i++)
        {
            fact*=i;
        }
        return fact;
    },[input])


    return(
        <div>
            <input 
            type="number" 
            placeholder="Enter the number:"
            onChange={(e)=>setInput(Number(e.target.value))}/> &nbsp;&nbsp;
            <p>the factorial is : {calculatedVal}</p>
        </div>
    )
}




// // change when btn is clicked
// function Assignment1()
// {
//     const [input,setInput] = useState(1);
//     const [factorialInput,setFactorialInput] = useState(0)

    // function helper(e)
    // {
    //     const inputValue = document.querySelector('input[type="number"]').value;
    //     setInput(inputValue)
    // }
    // another method without using dom
//     function inputChange(e)
//     {
//         setInput(e.target.value)
//     }
//     function helper(e)
//     {
       
//         setFactorialInput(input)
//     }
       
        
        

//     return(
//         <div>
//             <input 
            
//             type="number" 
//             placeholder="Enter the number:"
//             onChange={inputChange}/> &nbsp;&nbsp;
//             <button onClick={helper}>getFactorial</button>
//             <br />
//             <br />
//             <CamputeFactorial num={factorialInput}/>

//         </div>
//     )

// }

// function CamputeFactorial({num})
// {
//     let ans = 1;
//     for(let i=1;i<=num; i++)
//     {
//         ans *= i;
//     }
//     return(
//         <div>
//             factorial of the number  is:{ans}
//         </div>
//     )
// }



export default Assignment1;