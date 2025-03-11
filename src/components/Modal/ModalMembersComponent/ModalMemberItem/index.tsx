import React from 'react'
import { ModalMemberItemInterface } from '../../../../types/types'
import { useSearchQuery } from '../../../../hooks/hooks'
import Badge from '../../../Badge'
import PokemonSprites from '../../../PokemonSprites'

const ModalMemberItem = React.memo(({id, searchParams}: ModalMemberItemInterface) => {
    const member = searchParams.get(`Member${id+1}`) || ''
    const { data, isLoading, isError } = useSearchQuery(member)
    console.log(member)
    console.log(data)
    return (
        <div className='flex justify-between p-5'>
            <div className='flex flex-col mr-10'>
                <span>Member {id+1}</span>
                <span className='text-xl font-semibold'>{member}</span>
            </div>
            <PokemonSprites front={data?.sprites.front_default} back={data?.sprites.back_default}/>
            <div className='flex justify-center mr-10'>
                <span>Abilities:</span>
                <div className='flex flex-wrap items-start gap-4 px-2 w-80'>
                    {data?.abilities.map((ability, index) => (
                        <Badge key={index} label={ability.ability.name} />
                    ))}
                </div>
            </div>
            <div className='flex justify-center'>
                <span>Moves:</span>
                <div className='flex flex-wrap items-start gap-4 px-2 w-96'>
                    {data?.moves.slice(0, 10).map((move, index) => (
                        <Badge key={index} label={move.move.name} />
                    ))}
                </div>
            </div>
        </div>
    )
})

export default ModalMemberItem