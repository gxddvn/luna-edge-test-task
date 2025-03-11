import React, { useState } from 'react'

const PokemonSprites = React.memo(({ front, back }: { front: string | undefined; back: string | undefined }) => {
    const [sprite, setSprite] = useState(front);

    return (
        <img
            src={sprite}
            alt="Pokemon"
            className="w-24 h-24 transition-all duration-200"
            onMouseEnter={() => setSprite(back)}
            onMouseLeave={() => setSprite(front)}
        />
    )
})

export default PokemonSprites