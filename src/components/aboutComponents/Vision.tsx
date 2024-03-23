import React from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const Vision = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let vision = '';
    let info = '';

    if (language === 'English') {
        vision = 'Our Vision';
        info = `To be a global organization by enhancing and enriching core value for
        customers by setting up a benchmark in quality and determined to be
        one of the most trusted source of pesticides and fertilizers across
        the globe with focusing on satisfaction of the community who live the
        life by the seeds of their plants - The Farmers.`;
    } else if (language === 'Hindi') {
        vision = 'हमारी दृष्टि';
        info = `गुणवत्ता में एक मानक स्थापित करके ग्लोबल संगठन बनना और ग्राहकों के लिए मूल्यों को बढ़ाकर और समृद्ध करके वर्षों तक कीटनाशक और उर्वरकों का सबसे विश्वसनीय स्रोत बनने का निर्धारित है जो अपने पौधों के बीजों से जीवन जीते हैं - किसानों की संतुष्टि पर ध्यान केंद्रित करके।`;
    } else if (language === 'Marathi') {
        vision = 'आमच्या दृष्टिकोन';
        info = `गुणवत्तेत एक मानक स्थापित करून वैश्विक संस्था बनणे आणि ग्राहकांसाठी मूल्ये वाढवून आणि समृद्ध करून वर्षों तर्फे कीटनाशक आणि उर्वरकांचा सर्वांच्या विश्वात्मक स्रोत बनण्याचा निर्धार करून त्यांना जीवन जगण्याच्या बियांच्या बीजांनी जीवन जगणार्या समुदायाच्या संतुष्टीवर ध्यान केंद्रित करून.`;
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 h-72 hidden md:block">
                <img src="/vision.png" alt="ceo" className="rounded-md h-full w-full" />
            </div>
            <div className="md:w-3/4 shadow-xl z-30 bg-stone-200 p-10">
                <h1 className={` text-2xl md:text-3xl font-extrabold mb-4`}>{vision}</h1>
                <p className="font-light">
                    {info}
                </p>
            </div>
        </div>
    )
}

export default Vision