import React from "react";
import { setupWorker } from "msw";
import Pokemons from "./Pokemons";
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
