import React from 'react'
import Select from '../Select'
import { SelectsPropsInterface } from '../../types/types'

const Selects = React.memo(({data, control, errors, fetchNextPage, isLoading, isError}: SelectsPropsInterface) => {
    return (
        <>
            {isError ? (
                <div className='flex justify-center items-center my-4'>
                    <span className='text-2xl font-bold text-gray-600'>Error</span>
                </div>
            ) : (
                <>
                    {!isLoading && (
                        <div className='flex justify-between items-start my-4'>
                            {data && ['Member1', 'Member2', 'Member3', 'Member4'].map((name, index) => (
                                <Select 
                                    key={index} 
                                    pokemons={data} 
                                    label="Select" 
                                    name={name as "Member1" | "Member2" | "Member3" | "Member4" | "firstName" | "lastName"} 
                                    control={control} 
                                    error={errors[name as "Member1" | "Member2" | "Member3" | "Member4" | "firstName" | "lastName"]}
                                    size='sm'
                                    fetchNextPage={fetchNextPage}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    )
})

export default Selects