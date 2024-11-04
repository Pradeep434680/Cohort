import { useMemo, useState } from "react";

function Assignment3()
{
    const [items,setItems] = useState([
        { name:'chocolate',value:20 },
        { name:'bananas',value:30 },
        { name:'milk',value:40 },
        { name:'namkeen',value:210 }
    ])
    const total_amount = useMemo(()=>{
        let total_value=0;
        for(let i=0; i<items.length; i++)
        {
            total_value+= items[i].value;
        }
        
        return total_value;

    },[items])
    // setItems(total_amount)

    return(
        <div>
            <div>
                <ul>
                    {items.map((item,index)=>(
                        <li key={index}>{item.name}  - Price : ${item.value}</li>
                    ))}
                </ul>
            </div>
            <p>your total bill is :{total_amount}</p>
        </div>
    )

}
export default Assignment3;