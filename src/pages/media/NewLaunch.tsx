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
    const vertical = [4, 7];

    let products = [
        {
            id: 1,
            path: "newlaunch24",
            nameEnglish: "New Launch 2024",
            nameMarathi: "नवीन लॉन्च 2024",
            nameHindi: "नई लॉन्च 2024",
            size: [1, 2, 3, 4, 7],
        },
        {
            id: 2,
            path: "newlaunch23",
            nameEnglish: "New Launch 2023",
            nameMarathi: "नवीन लॉन्च २०२३",
            nameHindi: "नई लॉन्च 2023",
            size: [5, 6],
        },
    ];

    return (
        <div className='bg-slate-50 varela-round-regular'>
            <PageHeader title={newlaunchProducts} />
            <div className='p-4 md:px-20'>
                <h1 className='pt-4 px-4 text-3xl md:text-5xl font-extrabold md:p-4'>{newlaunchProducts}</h1>
                <div>
                    {
                        products.map((product: any, index: any) => {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col gap-8 bg-slate-100 z-30 shadow-md rounded p-4 md:p-8 md:m-4'>
                                    <div className='text-2xl font-bold'>{
                                        language === "English" ? product.nameEnglish :
                                            language === "Marathi" ? product.nameMarathi :
                                                product.nameHindi
                                    }</div>
                                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10'>
                                        {
                                            product.size.map((item: number, index: number) => {
                                                return (
                                                    <div>
                                                        {vertical.includes(item) ? (
                                                            <div key={index} className='col-span-1 w-2/3 h-84 overflow-hidden rounded'>
                                                                <img src={`/newlaunch/${product.path}/${item}.jpg`} alt='product' className='w-full h-full hover:scale-105 transition ease-in-out duration-150' />
                                                            </div>
                                                        ) : (
                                                            <div key={index} className='col-span-1 w-full h-52 overflow-hidden rounded'>
                                                                <img src={`/newlaunch/${product.path}/${item}.jpg`} alt='product' className='w-full h-full hover:scale-105 transition ease-in-out duration-150' />
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NewLaunch
