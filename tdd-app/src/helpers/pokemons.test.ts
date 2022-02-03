import axios from "axios";
import { getPokemons } from "../helpers/pokemons";
import globalPokemos from "../fixtures/pokemon.json";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const localPokemons = globalPokemos.slice(0);

mockedAxios.get.mockImplementation(() => {
  console.log("Fetching locally the pokemons");
  return Promise.resolve({ data: localPokemons });
});

describe("Pokemon testing suite", () => {
  it("fetches the pokemon", async () => {
    // Act
    const pokemons = await getPokemons("");

    // Assert
    expect(pokemons).not.toBeNull();
  });

  it("filters by name case insensitive", async () => {
    // Arrange

    // Act
    const pokemons = await getPokemons("pikachu");

    // Assert
    expect(pokemons).not.toBeNull();
    expect(pokemons).toHaveLength(1);
  });

  it.each(
    // Arrange
    [
      ["Grass", 97],
      ["Fire", 64],
    ]
  )("filters by %s type", async (type, expected) => {
    // Act
    const pokemons = await getPokemons(undefined, type);

    // Assert
    expect(pokemons).not.toBeNull();
    expect(pokemons).toHaveLength(expected);
    expect(pokemons.filter((p) => p.type.some((t) => t === type))).toBeTruthy();
  });
});
