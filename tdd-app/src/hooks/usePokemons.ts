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
import { useState } from "react";
import { getPokemons, Pokemon } from "../helpers/pokemons";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPokemons = async () => {
    try {
      const response = await getPokemons();
      setPokemons(response);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    pokemons,
    loading,
    getPokemons: fetchPokemons,
  };
};
