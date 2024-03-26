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

    return (
        <div>
            <h1>{companyNews}</h1>
        </div>
    )
}

export default CompanyNews