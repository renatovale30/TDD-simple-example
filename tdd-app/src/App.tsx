import React from "react";
import Pokemons from "./Pokemons";
import { setupWorker } from "msw";
import { getPokemons } from "./mocks";

function App() {
  const browser = setupWorker(getPokemons);
  browser.start();

  return (
    <div>
      <Pokemons />
    </div>
  );
}

export default App;
