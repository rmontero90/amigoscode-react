import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        console.log('Counter mounted');
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            console.log('Counter value changed');
        }
        return () => console.log('Counter has unmounted');
    }, [count]);
    return (
        <section>
            <h1>{count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </section>    
    );
};

export default Counter;