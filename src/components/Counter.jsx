import { useContext } from "react";
import { CounterContext } from "../CounterContext";

const Counter = () => {

    const [state, dispatch] = useContext(CounterContext);
    

    return (
        <section>
            <h1>{state.counterOne}</h1>
            <button onClick={() => dispatch('increment')}>+</button>
            <h1>{state.counterTwo}</h1>
            <button onClick={() => dispatch('decrement')}>-</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </section>    
    );
};

export default Counter;