import React, { useEffect, useMemo, useState } from 'react'
import Button from '../Button'
import DropDownMenu from './DropDownMenu'
import { SelectPropsInterface } from '../../types/types'
import { useDebounceValue } from 'usehooks-ts'
import { useChoosePokemon, useFiltredPokemons, useSelectOnClick } from '../../hooks/hooks'
import { useController } from 'react-hook-form'

const Select = ({pokemons, label, name, control, optional = false, labelName, assistText, size, disabled, selectValue, error, setCountOffset, offset, prevData}: SelectPropsInterface) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isError, setIsError] = useState(false)
    const [debouncedValue, setDebounceValue] = useDebounceValue('', 500)
    const { field: { value, onChange } } = control ? useController({ 
        name, 
        control, 
        rules: {
            required: 'Please choose a pokemon',
        }, 
    }) : { field: { value: "", onChange: () => {} } };
    const choosePokemon = useChoosePokemon({setValue: onChange, setIsOpen});
    const filtredPokemons = useFiltredPokemons({pokemons, debouncedValue, prevData});
    const selectOnClick = useSelectOnClick({setIsOpen, isOpen, setDebounceValue});
    useEffect(() => {
        if (value) {
            setIsError(false)
        }
    }, [value])

    useEffect(() => {
        if (pokemons) {
            prevData.current = [
                ...prevData.current,
                ...pokemons.filter(item => 
                    !prevData.current.some(existingItem => existingItem.name === item.name)
                )
            ];
        }
    }, [pokemons, prevData]);
    
    return (
        <div className='relative inline-block text-left mx-2 rounded-md'>
            <div className='flex justify-between items-center mb-1'>
                <span className='text-sm'>{labelName}</span>
                {optional && <span className='text-xs text-gray-500'>Optional</span>}
            </div>
            <Button 
                label={value ? value : label}
                value={value || selectValue}
                onChange={onChange}
                lastIcon="chevronDown"
                size={size}
                option="text" 
                onClick={selectOnClick}
                style={{textTransform: "capitalize"}}
                additionalClassnames="border w-full text-left"
                disabled={disabled}
                isError={isError || !!error}
                setIsError={setIsError}
            />
            {assistText && <span className='text-xs text-gray-500 mt-2'>{assistText}</span>}
            {isError && <span className='text-xs text-red-500 mt-2'>Please choose a pokemon</span>}
            {isOpen && (
                <DropDownMenu pokemons={filtredPokemons} choosePokemon={choosePokemon} setDebounceValue={setDebounceValue} setCountOffset={setCountOffset} offset={offset} />
            )}
        </div>
    )
}

export default React.memo(Select)