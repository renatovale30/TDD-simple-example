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
import { Line } from 'rc-progress';
import usePokemons from "./hooks/usePokemons";
import pokemonImages from "./fixtures/pokemon-images.json"
import Types from './Types';
import useDebounce from './hooks/useDebounce'
import './Pokemons.css';

const maxHp = 250;
const maxAttack = 135;
const maxDefense = 130;
const maxSpeed = 130;

const RenderBar = ({percent, title, color}: {percent: number, title: string, color: string}) => {
  return <div title={title} className="pokemon-status">
    {title} <Line percent={percent} trailWidth={4} trailColor="#b5b5b5" strokeWidth={4} strokeColor={color} />
    </div>
}
const Pokemons = () => {
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce<string>(search, 500)
  const { pokemons, loading, getPokemons } = usePokemons();

  useEffect(() => {
    getPokemons(debouncedValue);
  }, [debouncedValue]);

  const onSearch = (value: string) => {
    setSearch(value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="pokemon-search">
        <input placeholder="Search Pokemon" type="text" onChange={(e) => onSearch(e.target.value)} />
      </div>
     
      <div className="pokemon-grid">
        {pokemons.map((poke) => {
          const name = poke.name.english;

          return (
            <div key={poke.id}>
              <div className="pokemon-header">
                <h2>{name}</h2>
                {poke.type.map(t =>  (
                  <div key={`${poke.id}-${t}`}>
                    <Types type={t}/>
                  </div>
                  ))}
              </div>
              <div className="pokemonWrapper" style={{ margin: "10px" }}>
                <div>
                  {/* @ts-ignore */}
                  <img src={pokemonImages[name]} alt={name} />
                </div>
                <div>
                  <RenderBar percent={(poke.base.HP / maxHp) * 100} title="HP" color="#4595c5" />
                  <RenderBar percent={(poke.base.Attack / maxAttack) * 100} title="Attack" color="#4595c5" />
                  <RenderBar percent={(poke.base.Defense / maxDefense) * 100} title="Defense" color="#4595c5" />
                  <RenderBar percent={(poke.base["Sp. Attack"] / maxAttack) * 100} title="Special Attack" color="#4595c5" />
                  <RenderBar percent={(poke.base["Sp. Defense"] / maxDefense) * 100} title="Special Defense" color="#4595c5" />
                  <RenderBar percent={(poke.base.Speed / maxSpeed) * 100} title="Speed" color="#4595c5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemons;
