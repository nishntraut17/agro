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
            <h1>{newlaunchProducts}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <div key={index} className='col-span-1 h-[100px] w-[100px]'>
                                <img src={`/products/${item}.png`} alt='product' className='w-full h-full' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewLaunch