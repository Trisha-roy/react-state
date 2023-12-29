import { useState } from "react";


const Counter = () => {
    const [count,setCount]=useState(0);

    const handleCount=()=>{
        const newCount=count+1;
        setCount(newCount)
    }
    const handleMin=()=>{
        const newCount=count-1;
        setCount(newCount)
    }
    return (
        <div>
            <h3>Counter:  {count} </h3>
            <button onClick={handleCount}>+</button>
            <button onClick={handleMin}>-</button>
            
        </div>
    );
};

export default Counter;