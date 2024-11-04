import {atom, selector} from 'recoil'
export const countAtom =atom({
    key:"countAtom",// key is used to recognise the atom
    default:0
})

export const evenSelector=selector({
    key:"evenSelector",
    get:({get})=>{
        const count = get(countAtom);
        return count%2;
    }
})