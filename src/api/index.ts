import axios from "axios";
import { FetchPokemonsPropsInterface, FetchPokemonsReqInterface, FetchSearchPokemonPropsInterface, PokemonInterface } from "../types/types";

export const fetchPokemons = async ({offset}: FetchPokemonsPropsInterface) => {
    const { data } = await axios.get<FetchPokemonsReqInterface>(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
    return data.results;
}

export const fetchSearchPokemon = async ({name}: FetchSearchPokemonPropsInterface) => {
    const { data } = await axios.get<PokemonInterface>(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return data;
}