import React, { useState } from 'react';

const PokemonSprites = React.memo(({ front, back }: { front?: string; back?: string }) => {
    const [sprite, setSprite] = useState(() => front || "");

    return (
        <img
            src={sprite}
            alt="Pokemon"
            className="w-24 h-24 transition-all duration-200"
            onMouseEnter={() => back && setSprite(back)}
            onMouseLeave={() => front && setSprite(front)}
        />
    );
});

export default PokemonSprites;
