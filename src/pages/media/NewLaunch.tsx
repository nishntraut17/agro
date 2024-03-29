import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const NewLaunch = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let newlaunchProducts = "New Launch Products";
    if (language === "English") {
        newlaunchProducts = "New Launch Products";
    } else if (language === "Marathi") {
        newlaunchProducts = "नवीन लॉन्च उत्पादने";
    } else if (language === "Hindi") {
        newlaunchProducts = "नई लॉन्च उत्पादने";
    } else {
        newlaunchProducts = "New Launch Products";
    }

    return (
        <div className='md:p-4'>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <h1 className='pt-4 px-4 md:px-20 text-3xl md:text-5xl font-extrabold'>{newlaunchProducts}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 p-4 md:px-20 md:py-8 gap-8'>
                {
                    [1, 2].map((item, index) => {
                        return (
                            <div key={index} className='col-span-1 h-full w-full overflow-hidden rounded'>
                                <img src={`/newlaunch/${item}.jpg`} alt='product' className='w-full h-full hover:scale-105 transition ease-in-out duration-150' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewLaunch