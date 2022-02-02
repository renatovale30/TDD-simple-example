import { rest } from 'msw'
import pokemons from './fixtures/pokemon.json'
import {TPokemon} from './hooks/usePokemons'

export const getCount = rest.get('*/getCount', (req, res, ctx) => {
    return res(ctx.json('100'));
});

export const getPokemons = rest.get('*/getPokemons', (req, res, ctx) => {
    const parsedPokemons :TPokemon[] = pokemons.map(poke => ({
        id: poke.id,
        name: poke.name.english,
        type: poke.type,
        stats: {
            hp: poke.base.HP,
            attack: poke.base.Attack,
            defense: poke.base.Defense,
            spAttack: poke.base['Sp. Attack'],
            spDefense: poke.base['Sp. Defense'],
            speed: poke.base.Speed
        }
    }))
    return res(ctx.json(parsedPokemons));
});