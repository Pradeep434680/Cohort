import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'


// function App() {
//   const [exchangeData, setExchangeData] = useState({})
//   const [exchangeData2, setExchangeData2] = useState({})
//   const [bankData,setBankData] = useState({})


  
  
//   useEffect(()=>{

//       setExchangeData(
//         {
//           returns:100
//         }
//       )

    
//   },[])
//   useEffect(()=>{
   
//       setExchangeData2(
//         {
//           returns:100
//         }
//       )

    
//   },[])
  
//   useEffect(()=>{
//     setTimeout(() => {
//       setBankData({
//         income:100
//       })
//     }, 3000)

//   },[])
//   //whenever the antthing is changed then the calculation of cryptoReturns calculates
//   //always either exhangeData,or exhangeData2 changes ornot

//   //difference btw useEffect and useMemo
//   //useEffect don't return any value for you but useMemo return value
//   const cryptoReturn = useMemo(()=>{
//     return exchangeData.returns + exchangeData2.returns;
//   },[exchangeData,exchangeData2])
  
//   const incomeTaxes = (bankData.income + cryptoReturn)*0.3
//   return(
//     <p>hi there, your income taxes returns {incomeTaxes}</p>
//   )
// }

// memo=>renders only when the props changes
//if parent renders then its chlid also re-renders
// to avoid if parents are re-renders and child function props are not changnin 
// then memo will skip to re-rnders
// function App() {
//   const [exchangeData, setExchangeData] = useState({})
//   const [exchangeData2, setExchangeData2] = useState({})
//   const [bankData,setBankData] = useState({})
//   useEffect(()=>{
//     setExchangeData(
//       {
//         returns:100
//       }
//     )
//   },[])
      
      

    
//   useEffect(()=>{

//     setExchangeData2(
//       {
//         returns:100
//       }
//     )
    
    
//   },[])
  
//   useEffect(()=>{

//     setTimeout(() => {
//       setBankData({
//         income:100
//       })
//     }, 3000)

//   },[])

//   const cryptoCalculator = useCallback(function()
//   {
    
//     console.log("calculator");
//     return  exchangeData.returns + exchangeData2.returns;
//   },[exchangeData,exchangeData2])

//   return(
//     <div>
//       <CryptoGainsCalculator x={cryptoCalculator}></CryptoGainsCalculator>
//       <Dummy/>
//     </div>
//   )
// }
// // function CryptoGainsCalculator({x})
// // {
// //   console.log("hii there");
  
// //   return(
// //     <div> your crytpt returns is {x()}</div>
// //   )
// // }
// // replace
// const CryptoGainsCalculator = memo(({x})=>{
//     console.log("hii there");
//     return(
//       <div> your crytpt returns is {x()}</div>
  
//     )
//   })
  
// const Dummy = memo(()=>{
//   return(
//     <div>
//       i am dummy component
//     </div>
//   )
// })

// manipulate the react elements ovverride

function App()
{
  const [incomeTaxes,setIncomeTaxes]= useState(20000);
  const divRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      console.log(divRef);
      
      divRef.current.innerHTML = 20
    },3000)
  },[])
  return(
    <div>
    hi there !your income taxes are <div ref ={divRef}>{incomeTaxes}</div></div>
  )
}

export default App

  
  
  

  
 
