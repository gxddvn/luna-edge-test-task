import { useState } from 'react'
import { useFilterParams } from '../hooks/hooks';
import FormComponent from '../components/FormComponent';
import Modal from '../components/Modal';
import ModalMembersComponent from '../components/Modal/ModalMembersComponent';

const TrainerForm = () => {
    const { searchParams, updateParams } = useFilterParams();
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <h1 className='text-5xl font-bold text-blue-700 mb-20'>Pokémon Team for fight in the Battle Tower</h1>
            <FormComponent 
                updateParams={updateParams}
                searchParams={searchParams} 
                setIsOpen={setIsOpen} 
                isOpen={isOpen}
            />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} title="Modal Title">
                <ModalMembersComponent searchParams={searchParams} />
            </Modal>
        </div>
    )
}

export default TrainerForm