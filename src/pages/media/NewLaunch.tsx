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
        <div>
            <h1 className='pt-4 md:px-20 text-3xl md:text-5xl font-extrabold'>{newlaunchProducts}</h1>
            <div className='grid grid-cols-1 p-4 md:p-20 gap-8'>
                {
                    [1, 2].map((item, index) => {
                        return (
                            <div key={index} className='col-span-1 h-full w-full'>
                                <img src={`/newlaunch/${item}.jpg`} alt='product' className='w-full h-full' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewLaunch