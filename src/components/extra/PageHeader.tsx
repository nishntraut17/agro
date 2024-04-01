import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, path }: {
    title: string,
    path: string,
}) => {
    return (
        <div className="overflow-hidden relative">
            <div>
                <Link to={'/'} className='absolute text-green-700 z-100 top-2 left-2 md:text-5xl font-extrabold lg:top-20 lg:left-6'>
                    <p>Home |</p>
                </Link>
                <Link to={path} className='absolute text-green-700 z-100 top-2 left-[4.5rem] md:text-5xl font-extrabold lg:top-20 lg:left-6'>
                    <p>{title}</p>
                </Link>
            </div>
            <img src='/banner2.jpg' alt='about-banner' className="w-full" />
        </div>
    )
}

export default PageHeader