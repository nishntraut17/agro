import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CompanyNews = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let companyNews = "Company News";
    if (language === "English") {
        companyNews = "Company News";
    } else if (language === "Marathi") {
        companyNews = "कंपनीची बातम्या";
    } else if (language === "Hindi") {
        companyNews = "कंपनी की खबरें";
    } else {
        companyNews = "Company News";
    }

    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const horizontalImage = [1, 2];

    return (
        <div className=''>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className='flex flex-col gap-8 p-10'>
                <h1 className='text-4xl font-extrabold'>{companyNews}</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 '>
                    {images.map((image, index) => (
                        <div key={index} className={`flex flex-col gap-4 ${horizontalImage.includes(image) ? 'h-80 w-64' : 'h-64 w-80'} overflow-hidden rounded-sm`}>
                            <img src={`/company-news/${image}.jpg`} alt='Company News' className='h-full w-full hover:scale-105 transition duration-150 ease-in-out' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyNews;
