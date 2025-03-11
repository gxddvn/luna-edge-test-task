import React from 'react'
import Select from '../Select'
import { SelectsPropsInterface } from '../../types/types'

const Selects = React.memo(({data}: SelectsPropsInterface) => {
    
    return (
        <div className='flex justify-between items-center my-4'>
            {data && [...Array(4)].map((_, index) => (
                <Select key={index} pokemons={data} label="Select" />
            ))}

        </div>
    )
})

export default Selects