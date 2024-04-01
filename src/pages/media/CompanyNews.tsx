import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import PageHeader from '../../components/extra/PageHeader';

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
        <div className='bg-slate-50'>
            <PageHeader title={companyNews} />
            <div className=''>
                <div className="text-4xl font-extrabold py-4 px-8 lg:px-24">{companyNews}</div>
                <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:px-20">
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
