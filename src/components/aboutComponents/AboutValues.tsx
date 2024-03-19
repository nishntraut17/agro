import React from 'react';
import { MdDone } from "react-icons/md";
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const AboutValues = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let values = '';
    let info = '';
    let ethics = '';
    let transparency = '';
    let innovation = '';
    let quality = '';
    let environment = '';
    let rd = '';

    if (language === 'English') {
        values = 'Core Values';
        info = `Our core values are driven by a desire to improve the richness and
        protection of crop through scientific excellence with the highest
        standards of integrity. Our values are diamonds if our corporate
        reputation.`;
        ethics = 'Ethics and Integrity';
        transparency = 'Transparency';
        innovation = 'Innovations';
        quality = 'Total Quality Control';
        environment = 'Nurture Environment';
        rd = 'R & D Leadership through collaboration';
    } else if (language === 'Hindi') {
        values = 'मूल्य';
        info = `हमारे मूल्यों को वैज्ञानिक उत्कृष्टता के माध्यम से फसल की समृद्धि और संरक्षण में सुधार करने की इच्छा से चलाया जाता है और सबसे उच्च ईमानदारी के मानकों के साथ। हमारे मूल्य हमारे कॉर्पोरेट प्रतिष्ठा के हीरे हैं।`;
        ethics = 'नैतिकता और अखंडता';
        transparency = 'पारदर्शिता';
        innovation = 'नवाचार';
        quality = 'कुल गुणवत्ता नियंत्रण';
        environment = 'पर्यावरण की देखभाल';
        rd = 'सहयोग के माध्यम से आर एंड डी नेतृत्व';
    } else if (language === 'Marathi') {
        values = 'मूल्य';
        info = `आमच्या मूल्यांची इच्छा वैज्ञानिक उत्कृष्टतेच्या माध्यमातून फसलाची समृद्धी आणि संरक्षण सुधारण्याच्या इच्छेने चालित केली जाते आणि सर्वांत उच्च ईमानदारीच्या मानकांसह आमच्या मूल्ये आमच्या कॉर्पोरेट प्रतिष्ठेचे हीरे आहेत.`;
        ethics = 'नैतिकता आणि अखंडता';
        transparency = 'पारदर्शिता';
        innovation = 'नवोत्कृष्टता';
        quality = 'कुल गुणवत्ता नियंत्रण';
        environment = 'पर्यावरणाची देखरेख';
        rd = 'सहकार्यातून आर आणि डी नेतृत्व';
    }

    return (
        <div className="mb-8 flex flex-col md:flex-row">
            <div className="md:w-1/4">
                <img src="/values.png" alt="ceo" width={1000} height={1000} className="rounded-md h-[200px] w-[260px]" />
            </div>
            <div className="md:w-3/4">
                <h1 className={`text-3xl font-extrabold mb-4`}>{values}</h1>
                <p>
                    {info}
                </p>
                <ul className="font-bold text-lg mt-2 opacity-85">
                    <li className="flex flex-row gap-2"><MdDone />{ethics}</li>
                    <li className="flex flex-row gap-2"><MdDone />{transparency}</li>
                    <li className="flex flex-row gap-2"><MdDone />{innovation}</li>
                    <li className="flex flex-row gap-2"><MdDone />{quality}</li>
                    <li className="flex flex-row gap-2"><MdDone />{environment}</li>
                    <li className="flex flex-row gap-2"><MdDone />{rd}</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutValues