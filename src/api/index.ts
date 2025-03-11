import axios from "axios";
import { FetchPokemonsPropsInterface, FetchPokemonsReqInterface, FetchSearchPokemonPropsInterface, FetchSearchPokemonReqInterface } from "../types/types";

export const fetchPokemons = async ({offset}: FetchPokemonsPropsInterface) => {
    const { data } = await axios.get<FetchPokemonsReqInterface>(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
    return data.results;
}

export const fetchSearchPokemon = async ({debouncedValue}: FetchSearchPokemonPropsInterface) => {
    try {
        const { data } = await axios.get<FetchSearchPokemonReqInterface>(`https://pokeapi.co/api/v2/pokemon/${debouncedValue}`);
        // return data.species;
    }
    catch (error) {
        console.error(error);
    }
    return [];
}