import React from 'react'
import { ModalMembersComponentPropsInterface } from '../../../types/types'
import ModalMemberItem from './ModalMemberItem'

const ModalMembersComponent = React.memo(({searchParams}: ModalMembersComponentPropsInterface) => {
    return (
        <div className='flex flex-col'>
            {[...Array(4)].map((_, index) => (
                <ModalMemberItem key={index} id={index} searchParams={searchParams}/>
            ))}
            <div className='flex p-5'>
                <span className='text-lg'>
                    Trainer Name: <span className='font-semibold'>{searchParams.get('firstName')} {searchParams.get('lastName')}</span>
                </span>
            </div>
        </div>
    )
})

export default ModalMembersComponent