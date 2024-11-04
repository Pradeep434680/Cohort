// export function Todos()
// {
//     return <div style={
//         {
            // marginLeft:10,
         
            // padding:20,
            // width:200
//         }
//     }>
//         <h2>Go to gym</h2>
//         <h3>you should go to gym</h3>
//         <button>Mark as done</button>
//     </div>
// }

export function Todos({todos})
{
    return <div>
  {
    todos.map((todo) => {
      return (
        <div 
          key={todo.id}  // assuming each todo has a unique 'id'
          style={{
            marginLeft: 10,
            margin: 5,
            backgroundColor: "violet",
            padding: 10,
            width: 200
          }}
        >
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
          <button>{todo.completed ? "Completed" : "Mark as Done"}</button>
        </div>
      );
    })
  }
</div>

}