
import './App.css'
import { RecoilRoot, useRecoilState,useRecoilStateLoadable } from 'recoil';
// import { todosAtomFamily } from './FamilyAtom';
import {todosAtomFamily} from './selectorFamiltAtom'

function SelectorFamily() {
  return <RecoilRoot>
    <Todo id={3}/>
    <Todo id={2} />
  </RecoilRoot>
}

// if data is late from the backend 
//example- here useRecoilState(todosAtomFamily(id));
// we are fetching data using id if there is any delay there is hook useRecoilStateLoadable()
// it returns you state,contents => loading then out final solution
// state=>loading,hasVlaue,heaError
// contents =>actual content of the todo=>title,description

// this is first solution
// function Todo({id}) {

//    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

//   return (
//     <>
//       {todo.title}
//       {todo.description}
//       <br />
//     </>
//   )
// }
function Todo({id}) {

   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
    if(todo.state==="loading")
    {
        return<div>
            Loading...
        </div>
    }
    else if(todo.state==="hasValue")
    {
        return (
            <>
            {todo.contents.title}
            {todo.contents.description}
            <br />
            </>
        )
        //in first approach
        // return (
        //     <>
        //     {todo.title}
        //     {todo.description}
        //     <br />
        //     </>
        // )

    }
}

export default SelectorFamily