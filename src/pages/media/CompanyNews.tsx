import React from 'react'
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

    const images = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div>
            <h1>{companyNews}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-4 md:px-16'>
                {
                    images.map((image, index) => {
                        return (
                            <div className='col-span-1 rounded-md overflow-hidden'>
                                <img className="object-cover" key={index} src={`/company-news/${image}.jpg`} alt="random" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CompanyNews;