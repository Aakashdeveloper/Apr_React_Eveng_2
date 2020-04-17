import React,{useState,useEffect} from 'react';

function HookComponent(){
    const [title] = useState('Hooks Component')
    const [details] = useState('is simply dummy text of the')
    const [count,setCount] = useState(0)

    useEffect(() => {
        console.log("ffff")
    })
    console.log("ggg")
    return(
        <div>
            <h1>{title}</h1>
            <p>{details}</p>
            <p>{count}</p>
            <button onClick={() =>{setCount(count+1)}}>
                Click Me
            </button>
        </div>
    )
}


export default HookComponent