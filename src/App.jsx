// import styles from './App.module.css';
// import CounterTwo from './components/CounterTwo';
import axios from "axios";
import { useState, useEffect } from "react";


/* Exercise */

const App = () => {
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://pokeapi.co/api/v2/pokemon');
      setPokemonList(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
      
    }
    fetchData();
  }, []);

  if (!pokemonList?.results) {
    return <p>Loading...</p>
  } else {
    return (
      <>
        <h1>Pokemon List API</h1>    
        <ul>
          {pokemonList.results.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
        </ul>
      </>
   );
  }

}

export default App;
