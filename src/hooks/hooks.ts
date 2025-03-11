import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { fetchPokemons, fetchSearchPokemon } from "../api"
import { PokeResultsInterface, UseChoosePokemonInterface, UseFiltredPokemons, UsePokemonsPropsInterface, UseSelectOnClickInterface } from "../types/types"
import { useSearchParams } from "react-router-dom"
import { useCallback, useMemo } from "react"

export const usePokemons = ({offset}: UsePokemonsPropsInterface) => {
    // return useQuery({
    //     queryKey: ['pokemons', offset],
    //     queryFn: () => fetchPokemons({ offset }),
    // })
    return useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: () => fetchPokemons({ offset }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length === 0) {
                return undefined;
            }
            return lastPageParam + 20
        }
    })
}

// export const usePokemonsAll = ({offset}: UsePokemonsPropsInterface) => {
//     return useInfiniteQuery({
//         queryKey: ['pokemons'],
//         queryFn: () => fetchPokemons({ offset }),
//         initialPageParam: 0,
//         getNextPageParam: (lastPage, allPages, lastPageParam) => {
//             if (lastPage.length === 0) {
//                 return undefined;
//             }
//             return lastPageParam + 20
//         }
//     })
// }

export const useSearchQuery = (name: string) => {
    return useQuery({
        queryKey: ['pokemon', name],
        queryFn: () => fetchSearchPokemon({name}),
    })
}

export const useFilterParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateParams = useCallback((newValues: Record<string, string>) => {
        const newParams = new URLSearchParams(searchParams);
        Object.entries(newValues).forEach(([key, value]) => {
            newParams.set(key, value);
        });
        setSearchParams(newParams);
    }, [searchParams, setSearchParams]);

    return { searchParams, updateParams };
};

export const useFiltredPokemons = ({pokemons, debouncedValue}: UseFiltredPokemons): PokeResultsInterface[] | undefined => {
    return useMemo(() => {
        const allPokemons = pokemons?.pages.flat();
        return debouncedValue
            ? allPokemons?.filter((item) => item.name.toLowerCase().includes(debouncedValue.toLowerCase()))
            : allPokemons;
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