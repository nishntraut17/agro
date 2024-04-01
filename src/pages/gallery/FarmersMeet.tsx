import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import PageHeader from '../../components/extra/PageHeader';

const FarmersMeet = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let farmersMeet = "Farmer's Meeting";
    if (language === "English") {
        farmersMeet = "Farmer's Meeting";
    } else if (language === "Marathi") {
        farmersMeet = "किसान भेट";
    } else if (language === "Hindi") {
        farmersMeet = "किसानों की मुलाकात";
    } else {
        farmersMeet = "Farmer's Meeting";
    }
    let horizontal = [2, 4, 8, 9, 10, 12, 13, 14, 19, 22];
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24];

    return (
        <div>
            <PageHeader title={farmersMeet} />
            <div className='p-4 md:px-20'>
                <h1 className='text-4xl py-8 font-extrabold'>{farmersMeet}</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {
                        array.map((element: any, index) => {
                            return (
                                <div
                                    key={index}
                                    className='col-span-1 flex flex-row justify-center'>
                                    {
                                        horizontal.includes(element) ?
                                            <div className='rounded overflow-hidden'>
                                                <img
                                                    src={`/farmer-meeting/${element}.jpg`}
                                                    alt={farmersMeet}
                                                    className='rounded h-72 w-64 hover:scale-105 transition duration-200 ease-in-out'
                                                />
                                            </div>
                                            :
                                            <div className='rounded overflow-hidden'>
                                                <img
                                                    src={`/farmer-meeting/${element}.jpg`}
                                                    alt={farmersMeet}
                                                    className='rounded h-56 w-72 hover:scale-105 transition duration-200 ease-in-out'
                                                />
                                            </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FarmersMeet