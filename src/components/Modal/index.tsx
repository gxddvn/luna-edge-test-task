import React from 'react'
import { ModalPropsInterface } from '../../types/types'
import { Icons } from '../../assets/icons';
import Button from '../Button';

const Modal = React.memo(({ isOpen, onClose, children, title }: ModalPropsInterface) => {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2xl shadow-lg z-10 scale-100 opacity-100 transition-transform"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-8">
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <Button option="text" label='' onClick={onClose} firstIcon={"close"} />
                </div>
                {children}
            </div>
        </div>
    )
})

export default Modal