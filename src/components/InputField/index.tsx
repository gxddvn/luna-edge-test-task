import React from 'react'
import { InputFieldPropsInterface } from '../../types/types'
import { useSearchParams } from 'react-router-dom';

const InputField = React.memo(({id, label, error, register}: InputFieldPropsInterface) => {
    return (
        <div className='flex flex-col mb-5'>
            <label htmlFor={`${id}`}>{label}</label>
            <input 
                required
                className={`my-2 h-10 border-2 ${error ? "border-red-600" : "border-gray-200 "} rounded-lg px-4 py-3`} 
                type="text" 
                id={`${id}`} 
                {...register}
            />
            {error && <p className='text-gray-600'>This field is required</p>}
        </div>
    )
})

export default InputField