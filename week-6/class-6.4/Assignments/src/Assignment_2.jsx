// In this assignment, you will create a component that renders a large list of sentences and includes
// an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated
// when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the

import { useMemo, useState } from "react";

// dependency array
const words =["hi","my","name","is","for","to","random","word","why","when","will","you","go"];
const TOTOAL_LINES = 1000;
const ALL_WORDS = [];
for(let i=0; i<TOTOAL_LINES; i++)
{
    let sentence = ""
    for(let j=0; j<words.length; j++)
    {
        sentence += words[Math.floor(words.length*Math.random())];
        sentence +=" "
    }
    ALL_WORDS.push(sentence);
}

function Assignment2()
{
    const [sentences,setSentences] = useState(ALL_WORDS);
    const [filter,setFilter] = useState("");
    //expensive function

    const filteredSentence = useMemo(()=>{
        return sentences.filter(x=> x.includes(filter))
    },[sentences,filter]) 
    return(
        <div>
            <input type="text" 
            onChange={(e)=>setFilter(e.target.value)}/>
            {filteredSentence.map(word=> <div>
                {word}
                </div>)}
        </div>
    )
}
export default Assignment2;