import axios from "axios";

export type Pokemon = {
  id: number;
  name: {
    english: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
};

export async function getPokemons(
  name?: string,
  type?: string
): Promise<Pokemon[]> {
  const { data: pokemon } = await axios.get<Pokemon[]>(
    "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json"
  );

  let result = pokemon;

  if (name) {
    result = result.filter(
      (p) => p.name.english.toLowerCase() === name.toLowerCase()
    );
  }

  if (type) {
    result = result.filter((p) =>
      p.type.some((t) => t.toLowerCase() === type.toLowerCase())
    );
  }

  return result;
}
