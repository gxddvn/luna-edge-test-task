import React from 'react'
import { PokemonInterface } from '../../../../../types/types'
import Badge from '../../../../Badge'

const Moves = React.memo(({data} : {data: PokemonInterface | undefined}) => {
    return (
        <div className='flex justify-center'>
            <span>Moves:</span>
            <div className='flex flex-wrap items-start gap-4 px-2 w-96'>
                {data?.moves.slice(0, 10).map((move, index) => (
                    <Badge key={index} label={move.move.name} />
                ))}
            </div>
        </div>
    )
})

export default Moves