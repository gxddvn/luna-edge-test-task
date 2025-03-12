import React from 'react'
import { ModalMemberItemInterface } from '../../../../types/types'
import { useSearchQuery } from '../../../../hooks/hooks'
import PokemonSprites from '../../../PokemonSprites'
import MemberTitle from './MemberTitle'
import Abilities from './Abilities'
import Moves from './Moves'

const ModalMemberItem = React.memo(({id, searchParams}: ModalMemberItemInterface) => {
    const member = searchParams.get(`Member${id+1}`) || ''
    const { data, isLoading, isError } = useSearchQuery(member)
    return (
        <>
            {isError ? (
                <div className="flex justify-center p-5">
                    <span className="text-2xl font-bold text-gray-600">Error</span>
                </div>
            ) : (
                <>
                    {!isLoading && (
                        <div className="flex justify-between p-5">
                            <MemberTitle id={id} member={member} />
                            <PokemonSprites front={data?.sprites.front_default} back={data?.sprites.back_default} />
                            <Abilities data={data} />
                            <Moves data={data} />
                        </div>
                    )}
                </>
            )}
        </>
    )
})

export default ModalMemberItem