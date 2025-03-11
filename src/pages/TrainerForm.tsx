import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { FormSubmitProps } from '../types/types';
import { useFilterParams, usePokemons } from '../hooks/hooks';
import FormComponent from '../components/FormComponent';

const TrainerForm = () => {
    const [countOffset, setCountOffset] = React.useState(0)
    const { data, isLoading, isError } = usePokemons({offset: countOffset})
    const { searchParams, updateParams } = useFilterParams();
    const {
        register, 
        handleSubmit, 
        formState: { errors, isValid },
        reset
    } = useForm({ 
        defaultValues: {
            firstName: "",
            lastName: "",
            oneMember: "",
            twoMember: "",
            threeMember: "",
            fourMember: "",
        }, 
        mode: "onBlur",
    });

    const onSubmit = useCallback((data: FormSubmitProps) => {

    }, [])

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <h1 className='text-5xl font-bold text-blue-700 mb-20'>Pokémon Team for fight in the Battle Tower</h1>
            <FormComponent errors={errors} data={data} isValid={isValid} handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />
        </div>
    )
}

export default TrainerForm