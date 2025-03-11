import React, { useRef, useState } from 'react'
import Selects from '../Selects'
import Button from '../Button'
import { FormPropsInterface, PokeResultsInterface } from '../../types/types'
import InputField from '../InputField'
import { onSubmitForm, usePokemons } from '../../hooks/hooks'
import { useForm } from 'react-hook-form'

const FormComponent = React.memo(({updateParams, searchParams, setIsOpen, isOpen}: FormPropsInterface) => {
    const { data, fetchNextPage, isLoading, isError } = usePokemons()
    const {
        register,
        control, 
        handleSubmit, 
        formState: { errors, isValid }
    } = useForm({ 
        defaultValues: {
            firstName: searchParams.get('firstName') || "",
            lastName: searchParams.get('lastName') || "",
            Member1: searchParams.get('Member1') || "",
            Member2: searchParams.get('Member2') || "",
            Member3: searchParams.get('Member3') || "",
            Member4: searchParams.get('Member4') || "",
        }, 
        mode: "onBlur",
    });

    const onSubmit = onSubmitForm({updateParams, setIsOpen, isOpen})
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
            <Selects data={data} control={control} errors={errors} fetchNextPage={fetchNextPage}/>
            <div className='flex items-center justify-end mt-8'>
                <Button type="submit" label="Submit" disabled={!isValid}/>
            </div>
        </form>
    )
})

export default FormComponent