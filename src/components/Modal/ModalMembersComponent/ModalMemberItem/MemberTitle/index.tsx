import React from 'react'

const MemberTitle = React.memo(({id, member}: {id: number, member: string}) => {
    return (
        <div className='flex flex-col mr-10'>
            <span>Member {id+1}</span>
            <span className='text-xl font-semibold'>{member}</span>
        </div>
    )
})

export default MemberTitle