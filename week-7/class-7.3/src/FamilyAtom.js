import {TODOS} from './todos'
import { atom ,atomFamily } from 'recoil'


export const todosAtomFamily = atomFamily({
    key:'todosAtomFamily',
    default:id=>{
        let foundTodo = null;
        for(let i=0; i<TODOS.length; i++)
            {
            if(TODOS[i].id == id)
                {
                    foundTodo = TODOS[i]
                }
            }
        return foundTodo;
    }
})
            export const todosAtom=atom({
                key:"atoms",
                default:TODOS[0]
            })