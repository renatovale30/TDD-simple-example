import { rest } from "msw";
import pokemons from './fixtures/pokemon.json'

export const getCount = rest.get("*/getCount", (req, res, ctx) => {
  return res(ctx.json("100"));
});

export const getPokemons = rest.get("*/Pokemons", (req, res, ctx) => {
  return res(ctx.json(pokemons));
});