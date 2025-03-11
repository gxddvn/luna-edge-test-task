import React, { useCallback, useMemo, useState } from 'react'
import Button from '../Button'
import DropDownMenu from './DropDownMenu'
import { SelectPropsInterface } from '../../types/types'
import { useDebounceValue } from 'usehooks-ts'
import { useChoosePokemon, useFiltredPokemons, useSelectOnClick } from '../../hooks/hooks'

const Select = ({pokemons, label }: SelectPropsInterface) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState("");
    const [debouncedValue, setDebounceValue] = useDebounceValue('', 500)

    const choosePokemon = useChoosePokemon({setValue, setIsOpen});
    const filtredPokemons = useFiltredPokemons({pokemons, debouncedValue});
    const selectOnClick = useSelectOnClick({setIsOpen, isOpen, setDebounceValue});

    return (
        <div className='relative inline-block text-left mx-2 border rounded-md'>
            <Button 
                label={value ? value : label}
                lastIcon="chevronDown"
                size="sm"
                option="text" 
                onClick={selectOnClick}
                style={{textTransform: "capitalize"}}
            />
            {isOpen && (
                <DropDownMenu pokemons={filtredPokemons} choosePokemon={choosePokemon} setDebounceValue={setDebounceValue} />
            )}
        </div>
    )
}

export default React.memo(Select)