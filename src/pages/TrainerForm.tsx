import React, { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormSubmitProps, PokeResultsInterface } from '../types/types';
import { useFilterParams } from '../hooks/hooks';
import FormComponent from '../components/FormComponent';
import Modal from '../components/Modal';
import ModalMembersComponent from '../components/Modal/ModalMembersComponent';

const TrainerForm = () => {
    const { searchParams, updateParams } = useFilterParams();
    const [isOpen, setIsOpen] = useState(false)
    
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

    const onSubmit = useCallback((data: FormSubmitProps) => {
        updateParams({
            firstName: data.firstName,
            lastName: data.lastName,
            Member1: data.Member1,
            Member2: data.Member2,
            Member3: data.Member3,
            Member4: data.Member4
        });
        setIsOpen(!isOpen)
    }, [updateParams])

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <h1 className='text-5xl font-bold text-blue-700 mb-20'>Pokémon Team for fight in the Battle Tower</h1>
            <FormComponent 
                errors={errors}  
                isValid={isValid} 
                handleSubmit={handleSubmit} 
                onSubmit={onSubmit} 
                register={register} 
                control={control}
            />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} title="Modal Title">
                <ModalMembersComponent searchParams={searchParams} />
            </Modal>
        </div>
    )
}

export default TrainerForm