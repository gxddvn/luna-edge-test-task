import React, { useRef, useState } from 'react'
import Selects from '../Selects'
import Button from '../Button'
import { FormPropsInterface, PokeResultsInterface } from '../../types/types'
import InputField from '../InputField'
import { usePokemons } from '../../hooks/hooks'

const FormComponent = React.memo(({errors, isValid, handleSubmit, onSubmit, register, control}: FormPropsInterface) => {
    const [countOffset, setCountOffset] = useState(0)
    const { data, isLoading, isError } = usePokemons({offset: countOffset})
    const prevData = useRef<PokeResultsInterface[] | []>(data ? data : [])
    return (
        <form className='flex flex-col shadow-md rounded-2xl p-10 bg-gray-100 border' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='font-bold text-4xl mb-10'>Pokemon Team</h1>
            <InputField 
                label={"First Name"} 
                id={"firstName"} 
                error={errors.firstName} 
                register={register('firstName', { required: true, minLength: 2, maxLength: 12, pattern: /^[A-Za-z]+$/i })} 
            />
            <InputField 
                label={"Last Name"} 
                id={"lastName"} 
                error={errors.lastName} 
                register={register('lastName', { required: true, minLength: 2, maxLength: 12, pattern: /^[A-Za-z]+$/i  })}
            />
            <Selects data={data} control={control} errors={errors} setCountOffset={setCountOffset} offset={countOffset} prevData={prevData}/>
            <div className='flex items-center justify-end mt-8'>
                <Button type="submit" label="Submit" disabled={!isValid}/>
            </div>
        </form>
    )
})

export default FormComponent