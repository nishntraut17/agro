import React from 'react'
import { useParams } from 'react-router-dom'
import array from './b2b-products';

const SingleB2B = () => {
    const { id } = useParams<{ id: any }>();

    return (
        <>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className='flex flex-col md:flex-row gap-4 p-4 md:p-20'>
                <div className='h-64 w-full md:h-[360px] md:w-1/3'>
                    <img src={`/b2b/${id}.jpg`} alt={array[id].title} className='w-full h-full' />
                </div>
                <div className='md:w-2/3 flex flex-col gap-6'>
                    <div className='text-4xl font-extrabold'>{array[id].title}</div>
                    <div className='text-lg'><span>Content: </span>{array[id].content}</div>
                    <div className='text-lg'>{array[id].description}</div>
                    <div className='text-lg'><span>Dosage: </span> {array[id].dosage}</div>
                    <div className='text-lg'><span>Packaging Size: </span>{array[id].package}</div>
                </div>
            </div>
        </>
    )
}

export default SingleB2B