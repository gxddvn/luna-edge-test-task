import React from 'react'
import { ButtonPropsInterface } from '../../types/types'
import { Icons } from '../../assets/icons'

const Button: React.FC<ButtonPropsInterface> = ({
    option = "primary",
    size = "base",
    label,
    firstIcon = undefined,
    lastIcon = undefined,
    type = "button",
    backgroundColor,
    disabled = false,
    ...props
}) => {
    const buttonSize = {
        xs: "p-0.5 text-xs",
        sm: "px-2 py-1 text-sm",
        base: "px-3 py-2 text-base",
        lg: "px-4 py-3 text-lg",
        xl: "px-5 py-4 text-xl",
    }

    const buttonVariant = {
        primary:"bg-indigo-700 text-white hover:bg-indigo-500 active:bg-indigo-500 focus:bg-blue-500 focus:outline focus:outline-2 focus:outline-indigo-700 disabled:text-indigo-300 disabled:bg-indigo-100",
        outline:"outline outline-1 outline-indigo-700 bg-bwhite text-indigo-700 hover:bg-indigo-100 hover:text-indigo-300 active:bg-indigo-100 active:text-indigo-300 focus:outline focus:outline-2 focus:outline-indigo-700 focus:text-indigo-700 disabled:bg-indigo-100 disabled:text-indigo-300 disabled:outline-none",
        text: "bg-white text-black hover:text-indigo-500 hover:bg-indigo-100 focus:bg-white focus:text-indigo-700 focus:outline focus:outline-2 focus:outline-indigo-700 disabled:text-indigo-300 disabled:bg-white",
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={`inline-flex items-center gap-2.5 w-fit rounded-md ${buttonSize[size]} ${buttonVariant[option]}`}
            style={{ backgroundColor }}
            {...props}
        >
            {firstIcon && <Icons type={firstIcon} className="w-5 h-5 mx-1" />}
            {label}
            {lastIcon && <Icons type={lastIcon} className="w-5 h-5 mx-1" />}
        </button>
    )
}

export default React.memo(Button)