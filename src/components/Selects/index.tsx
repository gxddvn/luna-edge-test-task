import React from 'react'
import Select from '../Select'
import { SelectsPropsInterface } from '../../types/types'

const Selects = React.memo(({data, control, errors, setCountOffset, offset}: SelectsPropsInterface) => {
    return (
        <div className='flex justify-between items-start my-4'>
            {data && ['Member1', 'Member2', 'Member3', 'Member4'].map((name, index) => (
                <Select 
                    key={index} 
                    pokemons={data} 
                    label="Select" 
                    name={name as "Member1" | "Member2" | "Member3" | "Member4" | "firstName" | "lastName"} 
                    control={control} 
                    error={errors[name as "Member1" | "Member2" | "Member3" | "Member4" | "firstName" | "lastName"]}
                    size='sm'
                    setCountOffset={setCountOffset}
                    offset={offset}
                />
            ))}
        </div>
    )
})

export default Selects