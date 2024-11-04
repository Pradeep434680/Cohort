import React from "react"
// function Cardwrapper()
// {
//     return(
//         <div>
//             <CardWrapper innerComponent={<TextComponent />}></CardWrapper>
//             <CardWrapper innerComponent={<TextComponent2 />}></CardWrapper>

//         </div>
//     )
// }
// in both components wrapper is same

// function TextComponent()
// {
//     return <div style={{margin:10}}>
//         <h2>Hi there</h2>
//         <h3>i am here</h3>
//     </div>
// }
// function TextComponent2()
// {
//     return <div style={{margin:10}}>
//         <h2>Hi there</h2>
//         <h3>i am here</h3>
//     </div>
// }
    
// function CardWrapper({innerComponent})
// {
//     return <div style={
//         {border:"2px solid black"}
//     }>
//         {innerComponent}
//     </div>
// }



//***************this is the cleaner syntex************ */
function Cardwrapper()
{
    return(
        <div>
            <CardWrapper> hii there</CardWrapper>
            <CardWrapper >hello guys</CardWrapper>

        </div>
    )
}
function CardWrapper({children})
{
    return <div style={
        {border:"2px solid black",margin:5,padding:5}
    }>
        {children}
    </div>
}



export default Cardwrapper