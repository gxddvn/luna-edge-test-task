import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { DebouncedState } from "usehooks-ts";

export interface FormSubmitProps {
    firstName: string;
    lastName: string;
    oneMember: string;
    twoMember: string;
    threeMember: string;
    fourMember: string;
}

export interface ButtonPropsInterface {
    backgroundColor?: string;
    option?: "outline" | "primary" | "text";
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    disabled?: boolean;
    type?: "submit" | "button" | "reset";
    firstIcon?: string | undefined;
    lastIcon?: string | undefined;
    label: string;
    onClick?: () => void;
    style?: { [key: string]: string | number };
}

export interface IconProps {
    className?: string;
}

export interface IconsPropsInterface {
    type: string;
    className?: string;
}

export interface PokeResultsInterface {
    name: string;
    url: string;
}

export interface FetchPokemonsReqInterface {
    count: string;
    next: string;
    previous: string;
    results: PokeResultsInterface[] | [];
}

export interface FetchPokemonsPropsInterface {
    offset?: number;
}

export interface FetchSearchPokemonPropsInterface {
    debouncedValue?: string;
}

export interface UsePokemonsPropsInterface {
    offset?: number;
}

export interface SelectPropsInterface {
    pokemons: PokeResultsInterface[] | [] | undefined;
    label: string;
}

export interface UseFiltredPokemons {
    pokemons: PokeResultsInterface[] | [] | undefined;
    debouncedValue: string;
}

export interface DropDownMenuPropsInterface {
    pokemons: PokeResultsInterface[] | [] | undefined;
    choosePokemon: (pokemon: string) => void;
    setDebounceValue:  DebouncedState<(value: string) => void>;
}

export interface DropDownMenuItemPropsInterface {
    name: string;
    choosePokemon: (pokemon: string) => void;
}

export interface SelectsPropsInterface {
    data: PokeResultsInterface[] | [] | undefined;
}

export interface FetchSearchPokemonReqInterface {
    species: {
        name: string;
        url: string;
    }
}

export interface DefaultUseFormValues {
    firstName: string;
    lastName: string;
    oneMember: string;
    twoMember: string;
    threeMember: string;
    fourMember: string;
}

export interface FormPropsInterface {
    errors: FieldErrors<DefaultUseFormValues>;
    data: PokeResultsInterface[] | [] | undefined;
    isValid: boolean;
    handleSubmit: UseFormHandleSubmit<DefaultUseFormValues, undefined>;
    onSubmit: (data: FormSubmitProps) => void;
    register: UseFormRegister<DefaultUseFormValues>;
}

export interface UseChoosePokemonInterface {
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UseSelectOnClickInterface {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; 
    isOpen: boolean; 
    setDebounceValue: DebouncedState<(value: string) => void>;
}