import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const FieldVisits = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let fieldVisits = "Field Visits";
    if (language === "English") {
        fieldVisits = "Field Visits";
    } else if (language === "Marathi") {
        fieldVisits = "फील्ड भेट";
    } else if (language === "Hindi") {
        fieldVisits = "फील्ड दौरा";
    } else {
        fieldVisits = "Field Visits";
    }

    let horizontal = [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 21, 23, 24, 25, 28, 29, 30];
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    return (
        <div className='p-4 md:px-20 md:py-8'>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <h1 className='text-4xl py-8 font-extrabold'>{fieldVisits}</h1>
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
                                                src={`/field-visits/${element}.jpg`}
                                                alt={fieldVisits}
                                                className='rounded h-72 w-64 hover:scale-105 transition duration-200 ease-in-out'
                                            />
                                        </div>
                                        :
                                        <div className='rounded overflow-hidden'>
                                            <img
                                                src={`/field-visits/${element}.jpg`}
                                                alt={fieldVisits}
                                                className='rounded h-56 w-full hover:scale-105 transition duration-200 ease-in-out'
                                            />
                                        </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FieldVisits;