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
import React, { useEffect, useState } from "react";
import usePokemons from "./hooks/usePokemons";

const Pokemons = () => {
  const [search, setSearch] = useState<string>("");
  const { pokemons, loading, getPokemons } = usePokemons();

  useEffect(() => {
    getPokemons(search);
  }, [search]);

  const onSearch = (value: string) => {
    setSearch(value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Search Pokemon:{" "}
      <input type="text" onChange={(e) => onSearch(e.target.value)} />
      {pokemons.map((poke) => {
        return (
          <div style={{ margin: "10px" }} key={poke.id}>
            <div>Name: {poke.name}</div>
            <div>Type: {poke.type.join(", ")}</div>
            <div>HP: {poke.base.HP}</div>
            <div>Attack: {poke.base.Attack}</div>
            <div>Defense: {poke.base.Defense}</div>
            <div>Special Attack: {poke.base["Sp. Attack"]}</div>
            <div>Special Defense: {poke.base["Sp. Defense"]}</div>
            <div>Speed: {poke.base.Speed}</div>
            <div />
          </div>
        );
      })}
    </div>
  );
};

export default Pokemons;
