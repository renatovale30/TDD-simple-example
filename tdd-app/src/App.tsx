import React from 'react';
import Pokemons from './Pokemons'
import { setupWorker } from 'msw';
import { getCount, getPokemons } from './mocks'

function App() {
  
  const browser = setupWorker(getCount, getPokemons);
  browser.start();

  return (
    <div>
      <Pokemons />
    </div>
  );
}

export default App;
