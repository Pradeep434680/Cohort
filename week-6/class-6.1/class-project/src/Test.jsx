import { useEffect ,useState} from "react"

function Test()
{
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        setInterval(()=>{ 
            fetch('http://localhost:8080/todos')
            .then(async(res)=>{
                const json = await res.json();
                setTodos(json.todos)
            })

        },5000)
    },[])
       
    return(
        <div>
        {    todos.map((item)=>(
               <Onecomponent key={item.id} todo={item} ></Onecomponent>
            ))}

        </div>
    )
}
            
function Onecomponent({todo})
{
    return(
        <div>
            <h3>{todo.title}</h3>
            <h3>{todo.description}</h3>
            <h4>{todo.id}</h4>
        </div>
    )
}

export default Test
            
            
          
        
            
            

