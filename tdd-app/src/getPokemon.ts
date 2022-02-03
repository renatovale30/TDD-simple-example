import axios from "axios";

const supportedTypes = ["grass", "fire"];

export async function getPokemon(type: string) {
  if (typeof type !== "string") {
    throw new Error("Please provide a type");
  }

  if (!supportedTypes.some((t) => t === type.toLowerCase())) {
    throw new Error("Invalid pokemon type");
  }

  const { data: pokemon } = await axios.get<
    {
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
    }[]
  >(
    "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json"
  );

  return pokemon.filter((p) =>
    p.type.some((t) => t.toLowerCase() === type.toLowerCase())
  );
}
