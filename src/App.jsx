
import { useState,useEffect } from 'react'

export default function App() {

    const [count,setCount] = useState(0);
    const [num,setNum] = useState(0);

    const incr = ()=>{
        setCount(count+1)
    }
    const dcr = ()=>{
        setCount(count-1)
    }
    const incrNum = ()=>{
        setNum(num+1);
    }
    const dcrNum = ()=>{
        setNum(num-1);
    }
    useEffect(() => {
        console.log("only num updated");
    }, [num,count])
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>Counter App</h1>
        <h2>Counter is: {count}</h2>
        <h2>Num is: {num}</h2>
        <button onClick={incr}>Increment count</button>
        <button onClick={dcr}>Decrement count</button><br />
        <button onClick={incrNum}>Incr Num</button>
        <button onClick={dcrNum}>Dcr Num</button>
    </div>
  )
}


