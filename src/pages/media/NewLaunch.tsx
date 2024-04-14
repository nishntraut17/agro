import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import PageHeader from '../../components/extra/PageHeader';

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
    const verical = [4, 7];

    return (
        <div className=''>
            <PageHeader title={newlaunchProducts} />
            <h1 className='pt-4 px-4 md:px-20 text-3xl md:text-5xl font-extrabold md:p-4'>{newlaunchProducts}</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 p-4 md:px-20 gap-8 justify-center items-center'>
                {
                    [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                        verical.includes(item) ? (
                            <div key={index} className='col-span-1 w-2/3 h-84 overflow-hidden rounded'>
                                <img src={`/newlaunch/${item}.jpg`} alt='product' className='w-full h-full hover:scale-105 transition ease-in-out duration-150' />
                            </div>
                        ) : (
                            <div key={index} className='col-span-1 w-full h-52 overflow-hidden rounded'>
                                <img src={`/newlaunch/${item}.jpg`} alt='product' className='w-full h-full hover:scale-105 transition ease-in-out duration-150' />
                            </div>
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default NewLaunch