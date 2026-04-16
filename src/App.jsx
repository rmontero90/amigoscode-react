import styles from './App.module.css';
import CounterTwo from './components/CounterTwo';
// import Counter from "./components/Counter";


/* Exercise */

const App = () => {


  return (
    <div className={styles.wrapper}>
      <CounterTwo />
    </div>
  )

}

export default App;
