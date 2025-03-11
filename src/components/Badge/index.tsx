import React from 'react'
import { BadgePropsInterface } from '../../types/types'
import { Icons } from '../../assets/icons'

const Badge = React.memo(({
    label,
    firstIcon = undefined,
    lastIcon = undefined,
    backgroundColor = 'bg-gray-300',
    ...props
}: BadgePropsInterface) => {
    return (
        <div className={`inline-flex items-center justify-center px-[10px] py-[2px] rounded-md ${backgroundColor}`} {...props}>
            {firstIcon && <Icons type={firstIcon} className="w-5 h-5 mx-1" />}
            <span className='text-xs'>{label}</span>
            {lastIcon && <Icons type={lastIcon} className="w-5 h-5 mx-1" />}
        </div>
    )
})

export default Badge