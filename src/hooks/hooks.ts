import { useQuery } from "@tanstack/react-query"
import { fetchPokemons, fetchSearchPokemon } from "../api"
import { UseChoosePokemonInterface, UseFiltredPokemons, UsePokemonsPropsInterface, UseSelectOnClickInterface } from "../types/types"
import { useSearchParams } from "react-router-dom"
import { useCallback, useMemo } from "react"

export const usePokemons = ({offset}: UsePokemonsPropsInterface) => {
    return useQuery({
        queryKey: ['pokemons', offset],
        queryFn: () => fetchPokemons({ offset }),
    })
}

export const useFilterParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateParams = useCallback((key: string, value: string) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(key, value);
        setSearchParams(newParams);
    }, [searchParams, setSearchParams]);

    return { searchParams, updateParams };
};

export const useFiltredPokemons = ({pokemons, debouncedValue}: UseFiltredPokemons) => {
    return useMemo(() => {
        return debouncedValue
            ? pokemons?.filter((item) => item.name.toLowerCase().includes(debouncedValue.toLowerCase()))
            : pokemons;
    }, [debouncedValue, pokemons]);
}

export const useChoosePokemon = ({setValue, setIsOpen}: UseChoosePokemonInterface) => {
    return useCallback((pokemon: string) => {
        setValue(pokemon);
        setIsOpen(false);
    }, [setValue, setIsOpen]);
}

export const useSelectOnClick = ({setIsOpen, isOpen, setDebounceValue}: UseSelectOnClickInterface) => {
    return useCallback(() => {
        setIsOpen(!isOpen);
        setDebounceValue('');
    }, [setIsOpen, isOpen, setDebounceValue]);
}