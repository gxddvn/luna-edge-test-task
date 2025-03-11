import type { Meta, StoryObj} from "@storybook/react";
import Select from ".";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Select> = {
    component: Select,
    title: "Components/Select",
    tags: ['autodocs']
};

export default meta;

export const DefaultSelectStory: StoryObj<typeof Select> = {
    args: {
        label: "Select",
        size: "sm",
        pokemons: [
            { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }, 
            { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }, 
            { name: 'Squirtle', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }
        ],
        name: 'Member1',
        optional: true,
        labelName: 'Select', 
        assistText: 'Assistive Text'
    },
}

export const FilledSelectStory: StoryObj<typeof Select> = {
    args: {
        label: "Select",
        size: "sm",
        pokemons: [
            { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }, 
            { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }, 
            { name: 'Squirtle', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }
        ],
        name: 'Member1',
        optional: true,
        labelName: 'Select', 
        assistText: 'Assistive Text',
        selectValue: "Bulbasaur"
    },
}

export const ValidationSelectStory: StoryObj<typeof Select> = {
    args: {
        label: "Select",
        size: "sm",
        pokemons: [
            { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }, 
            { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }, 
            { name: 'Squirtle', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }
        ],
        name: 'Member1',
        optional: false,
        labelName: 'Select', 
        assistText: 'Please choose a pokemon',
        error: true
    },
}

export const DisabledSelectStory: StoryObj<typeof Select> = {
    args: {
        label: "Select",
        size: "sm",
        pokemons: [
            { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }, 
            { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }, 
            { name: 'Squirtle', url: 'https://pokeapi.co/api/v2/pokemon-form/20/' }
        ],
        name: 'Member1',
        optional: true,
        labelName: 'Select', 
        assistText: 'Assistive Text',
        disabled: true
    },
}