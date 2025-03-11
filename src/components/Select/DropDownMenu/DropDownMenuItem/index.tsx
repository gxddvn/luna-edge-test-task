import React from 'react'
import { DropDownMenuItemPropsInterface } from '../../../../types/types'

const DropDownMenuItem = React.memo(({choosePokemon, name}: DropDownMenuItemPropsInterface) => {
    return (
        <li
            className="p-1 hover:bg-slate-100 cursor-pointer text-nowrap capitalize"
            onClick={() => choosePokemon(name)}
        >
            {name}
        </li>
    )
})

export default DropDownMenuItem