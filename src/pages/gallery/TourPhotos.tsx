import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const TourPhotos = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let tourPhotos = "Tour Photos";
    if (language === "English") {
        tourPhotos = "Tour Photos";
    } else if (language === "Marathi") {
        tourPhotos = "टूर फोटो";
    } else if (language === "Hindi") {
        tourPhotos = "यात्रा फोटो";
    } else {
        tourPhotos = "Tour Photos";
    }
    let meetings = [
        {
            id: 1,
            path: "dwarka2017",
            heading: "DWARKA TOUR 2017",
            size: [1, 2, 3, 4, 5, 6, 7],
        },
        {
            id: 6,
            path: "singapore",
            heading: "SINGAPORE TOUR 2018",
            size: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        },
        {
            id: 7,
            path: "thailand24",
            heading: "Thailand TOUR 2024",
            size: [1, 2, 3, 4, 5],
        },
        {
            id: 8,
            path: "thailand23",
            heading: "Thailand TOUR 2023",
            size: [1, 2, 3, 4, 5],
        },
    ]

    return (
        <div className='px-4 md:p-20'>
            <h1 className='text-4xl font-extrabold'>{tourPhotos}</h1>
            <div>
                {
                    meetings.map((meeting: any, index) => {
                        return (
                            <div
                                key={index}
                                className='flex flex-col gap-20 bg-green-100 z-30 shadow-md rounded md:m-8 p-4 md:p-8'>
                                <div className='text-2xl font-bold'>{meeting.heading}</div>
                                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                                    {
                                        meeting.size.map((item: number, index: number) => {
                                            return (
                                                <div
                                                    key={index} className='col-span-1 h-[200px] w-[280px] rounded overflow-hidden border'>
                                                    <img src={`/meetings/${meeting.path}/${item}.jpg`} alt='meeting' className='h-full w-full hover:scale-105 transition duration-150 ease-in-out' />
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
    )
}

export default TourPhotos