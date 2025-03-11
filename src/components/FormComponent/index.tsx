import React from 'react'
import Selects from '../Selects'
import Button from '../Button'
import { FormPropsInterface } from '../../types/types'

const FormComponent = React.memo(({errors, data, isValid, handleSubmit, onSubmit, register}: FormPropsInterface) => {
    return (
        <form className='flex flex-col shadow-md rounded-2xl p-10 bg-gray-100 border' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='font-bold text-4xl mb-10'>Pokemon Team</h1>
            <div className='flex flex-col'>
                <label  htmlFor="firstName">First Name</label>
                <input className='my-2 h-10 border-2 border-gray-200 rounded-lg px-4 py-3' type="text" id="firstName" {...register('firstName', { required: true })}/>
                {errors.firstName && <p>This field is required</p>}
            </div>
            <div className='flex flex-col'>
                <label htmlFor="lastName">Last Name</label>
                <input className='my-2 h-10 border-2 border-gray-200 rounded-lg px-4 py-3' type="text" id="lastName" {...register('lastName', { required: true })}/>
                {errors.lastName && <p>This field is required</p>}
            </div>
            <Selects data={data}/>
            <div className='flex items-center justify-end mt-8'>
                <Button type="submit" label="Submit" disabled={!isValid}/>
            </div>
        </form>
    )
})

export default FormComponent