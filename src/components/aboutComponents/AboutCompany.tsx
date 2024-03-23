import React from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const AboutCompany = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);

    let info = '';
    let aboutCompany = '';

    if (language === 'English') {
        aboutCompany = 'About Company';
        info = `Enjo-Chem Agrochemical is a Manufacturer of Crop protection, Micronutrients, Pesticides and Fertilisers. Enjo-Chem is a leading agrochemical company dedicated to advancing agricultural productivity and sustainability. Our innovative solutions have a wide range of crop protection products, fertilisers, PGR, Pesticides and Micronutrients solutions. Committed to empowering farmers and nourishing communities, we leverage science and technology to create a more resilient and prosperous agriculture industry.`;
    } else if (language === 'Hindi') {
        aboutCompany = 'कंपनी के बारे में';
        info = `एन्जो-केम एग्रोकेमिकल क्रॉप संरक्षण, माइक्रोन्यूट्रिएंट्स, कीटनाशक और उर्वरकों का निर्माता है। एन्जो-केम एक अग्रणी कृषि रसायन कंपनी है जो कृषि उत्पादकता और टिकाऊता को बढ़ाने के लिए समर्पित है। हमारे नवाचारी समाधानों में क्रॉप संरक्षण उत्पादों, उर्वरकों, पीजीआर, कीटनाशकों और माइक्रोन्यूट्रिएंट्स समाधानों की एक विस्तृत श्रृंखला है। किसानों को सशक्त बनाने और समुदायों को पोषण देने के लिए प्रतिबद्ध, हम विज्ञान और प्रौद्योगिकी का सहारा लेते हैं ताकि एक अधिक सहनशील और समृद्ध कृषि उद्योग बनाया जा सके।`;
    } else if (language === 'Marathi') {
        aboutCompany = 'कंपनीबद्दल';
        info = `एन्जो-केम अॅग्रोकेमिकल कृषी संरक्षण, मायक्रोन्यूट्रिएंट्स, कीटनाशक आणि उर्वरक चा निर्माता आहे. एन्जो-केम हे एक अग्रणी कृषी रसायन कंपनी आहे ज्याने कृषी उत्पादनशी आणि टिकाऊतेशी अग्रसर करण्यासाठी समर्पित आहे. आमच्या नवीनतम सोल्यूशनमध्ये कृषी संरक्षण उत्पादने, उर्वरक, पीजीआर, कीटनाशक आणि मायक्रोन्यूट्रिएंट्स सोल्यूशन्सची एक विशाल श्रृंखला आहे. किसानांना सशक्त करण्यासाठी आणि समुदायांना पोषण देण्यासाठी प्रतिबद्ध असून, आम्ही विज्ञान आणि प्रौद्योगिकीचा वापर करून एक अधिक सहनशील आणि समृद्ध कृषी उद्योग तयार करण्यासाठी प्रयत्नशील आहोत.`;
    }

    return (
        <div className='flex flex-col lg:flex-row gap-20 '>
            <div className='lg:w-1/2 shadow-xl z-30 bg-stone-200 p-8'>
                <div className='text-3xl font-extrabold mb-4'>{aboutCompany}</div>
                <p className='font-light'>{info}</p>
            </div>
            <div className="lg:w-1/2 md:h-[350px]">
                <img src='/timeline.png' alt='timeline' className="h-full" />
            </div>
        </div>
    )
}

export default AboutCompany