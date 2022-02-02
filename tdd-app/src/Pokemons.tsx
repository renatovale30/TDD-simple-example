/*
 * Talkdesk Confidential
 *
 * Copyright (C) Talkdesk Inc. 2021
 *
 * The source code for this program is not published or otherwise divested
 * of its trade secrets, irrespective of what has been deposited with the
 * U.S. Copyright Office. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import usePokemons from './hooks/usePokemons';

const Pokemons = () => {
  const { pokemons, loading, getPokemons } = usePokemons();
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    getPokemons();
  }, []);

  const onSearch= (value: string) => {
    setSearch(value)
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     Search Pokemon: <input type="text" onChange={(e) => onSearch(e.target.value)} />
    {pokemons
      .filter(
        poke => poke.name.toLowerCase().includes(search.toLowerCase())
      )
      .map(poke => {
      return (
        <div style={{margin: "10px"}} key={poke.id}>
          <div>Name: {poke.name}</div>
          <div>Type: {poke.type.join(', ')}</div>
          <div>HP: {poke.stats.hp}</div>
          <div>Attack: {poke.stats.attack}</div>
          <div>Defense: {poke.stats.defense}</div>
          <div>Special Attack: {poke.stats.spAttack}</div>
          <div>Special Defense: {poke.stats.spDefense}</div>
          <div>Speed: {poke.stats.speed}</div>
          <div/>
        </div>
      );
    })}
    </div>
  );
};

export default Pokemons;
