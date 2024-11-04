
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './FamilyAtom';
import { useEffect } from 'react';
// import { todosAtom } from './FamilyAtom';


function AtomFamily() {
  return <RecoilRoot>
    <TodoUpadater/>
    <Todo id={1}/>
    <Todo id={1}/>
    <Todo id={4}/>
    <Todo id={3}/>
    <Todo id={2} />
  </RecoilRoot>
}
// this will update the todo after the 5 sec to a perticular id
function TodoUpadater()
{
    const updateTodo = useSetRecoilState(todosAtomFamily(2));
    useEffect(()=>{
        setTimeout(() => {
            updateTodo({
                id:"2",
                title:"new todo",
                description:"new todo"
            })
            
        }, 5000);
    })
}

function Todo({id}) {
    const currTodo = useRecoilValue(todosAtomFamily(id));
    // const currTodo = useRecoilValue(todosAtom);
    // it will render the all todos 

  return (
    <>
      {currTodo.title}
      {currTodo.description}
      <br />
    </>
  )
}

export default AtomFamily