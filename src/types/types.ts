import { Control, FieldError, FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { DebouncedState } from "usehooks-ts";

export interface FormSubmitProps {
    firstName: string;
    lastName: string;
    Member1: string;
    Member2: string;
    Member3: string;
    Member4: string;
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
    additionalClassnames?: string
    isError?: boolean; 
    setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
    value?: string;
    onChange?: (() => void) | ((...event: any[]) => void)
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
    name: string;
}

export interface UsePokemonsPropsInterface {
    offset?: number;
}

export interface SelectPropsInterface {
    pokemons: PokeResultsInterface[] | [] | undefined;
    label: string;
    name: "firstName" | "lastName" | "Member1" | "Member2" | "Member3" | "Member4"
    control?: Control<DefaultUseFormValues, any>;
    optional?: boolean;
    labelName?: string;
    assistText?: string;
    size?: "xs" | "sm" | "base" | "lg" | "xl" | undefined;
    disabled?: boolean | undefined;
    error?: FieldError | boolean | undefined;
    selectValue?: string
    setCountOffset: React.Dispatch<React.SetStateAction<number>>
    offset: number
    prevData: React.MutableRefObject<PokeResultsInterface[] | []>
}

export interface UseFiltredPokemons {
    pokemons: PokeResultsInterface[] | [] | undefined;
    debouncedValue: string;
    prevData: React.MutableRefObject<PokeResultsInterface[] | []>
}

export interface DropDownMenuPropsInterface {
    pokemons: PokeResultsInterface[] | [] | undefined;
    choosePokemon: (pokemon: string) => void;
    setDebounceValue:  DebouncedState<(value: string) => void>;
    setCountOffset: React.Dispatch<React.SetStateAction<number>>
    offset: number;
}

export interface DropDownMenuItemPropsInterface {
    name: string;
    choosePokemon: (pokemon: string) => void;
}

export interface SelectsPropsInterface {
    data: PokeResultsInterface[] | [] | undefined;
    control: Control<DefaultUseFormValues, any>;
    errors: FieldErrors<DefaultUseFormValues>;
    setCountOffset: React.Dispatch<React.SetStateAction<number>>
    offset: number
    prevData: React.MutableRefObject<PokeResultsInterface[] | []>
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
    Member1: string;
    Member2: string;
    Member3: string;
    Member4: string;
}

export interface FormPropsInterface {
  errors: FieldErrors<DefaultUseFormValues>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<DefaultUseFormValues, undefined>;
  onSubmit: (data: FormSubmitProps) => void;
  register: UseFormRegister<DefaultUseFormValues>;
  control: Control<DefaultUseFormValues, any>;
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

export interface InputFieldPropsInterface {
    id: string;
    label: string;
    error: FieldError | undefined;
    register: UseFormRegisterReturn;
}

export interface ModalPropsInterface {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export interface ModalMembersComponentPropsInterface {
    searchParams: URLSearchParams;
}

export interface ModalMemberItemInterface {
    id: number;
    searchParams: URLSearchParams;
}

export interface PokemonInterface {
    abilities: Ability[] | []
    base_experience: number
    cries: Cries
    forms: Form[] | []
    game_indices: Index[] | []
    height: number
    held_items: any[] | []
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Mfe[] | []
    name: string
    order: number
    past_abilities: any[] | []
    past_types: any[] | []
    species: Species
    sprites: Sprites
    stats: Stat[] | []
    types: Type[] | []
    weight: number
}

export interface Ability {
    ability: Ability2
    is_hidden: boolean
    slot: number
}

  export interface Ability2 {
    name: string
    url: string
  }
  
  export interface Cries {
    latest: string
    legacy: string
  }
  
  export interface Form {
    name: string
    url: string
  }
  
  export interface Index {
    game_index: number
    version: Version
  }
  
  export interface Version {
    name: string
    url: string
  }
  
  export interface Mfe {
    move: Move
    version_group_details: VersionGroupDetail[]
  }
  
  export interface Move {
    name: string
    url: string
  }
  
  export interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: MoveLearnMethod
    order?: number
    version_group: VersionGroup
  }
  
  export interface MoveLearnMethod {
    name: string
    url: string
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }
  
  export interface Species {
    name: string
    url: string
  }
  
export interface Sprites {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: Other
    versions: Versions
}

export interface Other {
    dream_world: DreamWorld
    home: Home
    "official-artwork": OfficialArtwork
    showdown: Showdown
}
  
  export interface DreamWorld {
    front_default: string
    front_female: any
  }
  
  export interface Home {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface OfficialArtwork {
    front_default: string
    front_shiny: string
  }
  
  export interface Showdown {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface Versions {
    "generation-i": GenerationI
    "generation-ii": GenerationIi
    "generation-iii": GenerationIii
    "generation-iv": GenerationIv
    "generation-v": GenerationV
    "generation-vi": GenerationVi
    "generation-vii": GenerationVii
    "generation-viii": GenerationViii
  }
  
  export interface GenerationI {
    "red-blue": RedBlue
    yellow: Yellow
  }
  
  export interface RedBlue {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
  }
  
  export interface Yellow {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
  }
  
  export interface GenerationIi {
    crystal: Crystal
    gold: Gold
    silver: Silver
  }
  
  export interface Crystal {
    back_default: string
    back_shiny: string
    back_shiny_transparent: string
    back_transparent: string
    front_default: string
    front_shiny: string
    front_shiny_transparent: string
    front_transparent: string
  }
  
  export interface Gold {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
  }
  
  export interface Silver {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
  }
  
  export interface GenerationIii {
    emerald: Emerald
    "firered-leafgreen": FireredLeafgreen
    "ruby-sapphire": RubySapphire
  }
  
  export interface Emerald {
    front_default: string
    front_shiny: string
  }
  
  export interface FireredLeafgreen {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  export interface RubySapphire {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  export interface GenerationIv {
    "diamond-pearl": DiamondPearl
    "heartgold-soulsilver": HeartgoldSoulsilver
    platinum: Platinum
  }
  
  export interface DiamondPearl {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface HeartgoldSoulsilver {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface Platinum {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationV {
    "black-white": BlackWhite
  }
  
  export interface BlackWhite {
    animated: Animated
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface Animated {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire
    "x-y": XY
  }
  
  export interface OmegarubyAlphasapphire {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface XY {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationVii {
    icons: Icons
    "ultra-sun-ultra-moon": UltraSunUltraMoon
  }
  
  export interface Icons {
    front_default: string
    front_female: any
  }
  
  export interface UltraSunUltraMoon {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationViii {
    icons: Icons2
  }
  
  export interface Icons2 {
    front_default: string
    front_female: any
  }
  
  export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
  }
  
  export interface Stat2 {
    name: string
    url: string
  }
  
  export interface Type {
    slot: number
    type: Type2
  }
  
  export interface Type2 {
    name: string
    url: string
  }

export interface BadgePropsInterface {
    label: string
    firstIcon?: string | undefined;
    lastIcon?: string | undefined;
    backgroundColor?: string
}