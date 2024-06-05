import React from 'react';

const PageHeader = ({ title }: {
    title: string,
}) => {
    return (
        <div className="varela-round-regular overflow-hidden relative">
            <div className='absolute text-green-950 z-100 top-4 left-[2rem] md:text-5xl font-extrabold lg:top-20 lg:left-14'>
                <p>{title}</p>
            </div>
            <img src='/banner2.jpg' alt='about-banner' className="w-full" />
        </div>
    )
}

export default PageHeader