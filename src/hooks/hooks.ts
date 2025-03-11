import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { fetchPokemons, fetchSearchPokemon } from "../api"
import { FormSubmitProps, OnSubmitInterface, PokeResultsInterface, UseChoosePokemonInterface, UseFiltredPokemons, UsePokemonsPropsInterface, UseSelectOnClickInterface } from "../types/types"
import { useSearchParams } from "react-router-dom"
import { useCallback, useMemo } from "react"

export const usePokemons = () => {
    return useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: ({ pageParam = 0 }) => fetchPokemons({ offset: pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length === 0) {
                return undefined;
            }
            return lastPageParam + 20
        },
        enabled: true
    })
}

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

export const onSubmitForm = ({updateParams, setIsOpen, isOpen}: OnSubmitInterface) => {
    return useCallback((data: FormSubmitProps) => {
        updateParams({
            firstName: data.firstName,
            lastName: data.lastName,
            Member1: data.Member1,
            Member2: data.Member2,
            Member3: data.Member3,
            Member4: data.Member4
        });
        setIsOpen(!isOpen)
    }, [updateParams, setIsOpen, isOpen])
}