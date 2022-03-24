import { useEffect, useState, useRef } from "react";



function Counter(){
    const [count, setCount] = useState(0);
    const renderCount = useRef(0); 
    const element = useRef(0);

    const addCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        renderCount.current++;
    });

    return (
        <div ref={element} className="Counter"> 
            <h1>
                count: {count}
            </h1>
            <button 
            onClick={addCount}> + </button>
        </div>
    )
}

export default Counter;