import React from 'react'
import Badge from '../../../../Badge'
import { PokemonInterface } from '../../../../../types/types'

const Abilities = React.memo(({data}: {data: PokemonInterface | undefined}) => {
    return (
        <div className='flex justify-center mr-10'>
            <span>Abilities:</span>
            <div className='flex flex-wrap items-start gap-4 px-2 w-80'>
                {data?.abilities.map((ability, index) => (
                    <Badge key={index} label={ability.ability.name} />
                ))}
            </div>
        </div>
    )
})

export default Abilities