import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import PageHeader from '../../components/extra/PageHeader';


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
            path: "thailand24",
            headingEnglish: "Thailand TOUR 2024",
            headingHindi: "थाईलैंड यात्रा 2024",
            headingMarathi: "थाईलैंड यात्रा 2024",
            size: [1, 2, 3, 4, 5],
        },
        {
            id: 2,
            path: "kashmir",
            headingEnglish: "Kashmir TOUR 2024",
            headingHindi: "कश्मीर यात्रा 2024",
            headingMarathi: "कश्मीर यात्रा 2024",
            size: [1, 2],
        },
        {
            id: 3,
            path: "diu",
            headingEnglish: "Somnath,Diu,Sasan Gir tour 2024",
            headingHindi: "सोमनाथ, दिउ, सासन गिर यात्रा 2024",
            headingMarathi: "सोमनाथ, दिउ, सासन गिर यात्रा 2024",
            size: [1, 2, 3, 4],
        },
        {
            id: 4,
            path: "thailand23",
            headingEnglish: "Thailand TOUR 2023",
            headingHindi: "थाईलैंड यात्रा 2023",
            headingMarathi: "थाईलैंड यात्रा 2023",
            size: [1, 2, 3, 4, 5],
        },
        {
            id: 6,
            path: "singapore",
            headingEnglish: "SINGAPORE TOUR 2018",
            headingHindi: "सिंगापुर यात्रा 2018",
            headingMarathi: "सिंगापुर यात्रा 2018",
            size: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        },
        {
            id: 1,
            path: "dwarka2017",
            headingEnglish: "DWARKA TOUR 2017",
            headingHindi: "द्वारका यात्रा 2017",
            headingMarathi: "द्वारका यात्रा 2017",
            size: [1, 2, 3, 4, 5, 6, 7],
        },
    ]

    return (
        <div>
            <PageHeader title={tourPhotos} />
            <div className='p-4 md:px-20'>
                <h1 className='text-4xl py-8 font-extrabold'>{tourPhotos}</h1>
                <div>
                    {
                        meetings.map((meeting: any, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col gap-8 bg-slate-100 z-30 shadow-md rounded p-4 md:p-8'>
                                    <div className='text-2xl font-bold'>{
                                        language === "English" ? meeting.headingEnglish :
                                            language === "Hindi" ? meeting.headingHindi :
                                                language === "Marathi" ? meeting.headingMarathi : meeting.headingEnglish
                                    }</div>
                                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10'>
                                        {
                                            meeting.size.map((item: number, index: number) => {
                                                return (
                                                    <div
                                                        key={index} className='col-span-1 h-[200px] w-[330px] md:w-[280px] rounded overflow-hidden border'>
                                                        <img src={`/meetings/${meeting.path}/${item}.jpg`} alt='meeting' className='w-full h-full hover:scale-105 transition duration-150 ease-in-out' />
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

export default TourPhotos