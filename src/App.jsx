// import styles from './App.module.css';
// import CounterTwo from './components/CounterTwo';
import { useReducer } from 'react'
import Counter from "./components/Counter";
import { CounterContext } from './CounterContext';

  const initialState = {
      counterOne: 0,
      counterTwo: 0
  }

  const counterReducer = (state, action) => {
      const actions = {
          increment: () => ({...state, counterOne: state.counterOne + 1}),
          decrement: () => ({...state, counterTwo: state.counterTwo - 1}),
          reset: () => initialState
      };

      return actions[action] ? actions[action]() : state;
  }

/* Exercise */

const App = () => {
  const value = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={value}>
      <Counter />
    </CounterContext.Provider>
  )

}

export default App;
