import React from 'react'
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const Mission = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let mission = '';
    let info = '';

    if (language === "English") {
        mission = 'Our Mission';
        info = `We are committed to supply the highest quality performance products
        to our customers within timelines at prevailing competitive prince and
        also to discover, develop & provide new formulations of pesticides
        while parallelly fulfilling our total quality control and quality
        assurance policy with no compromising our employees health and safety.`;
    } else if (language === "Hindi") {
        mission = 'हमारा मिशन';
        info = `हम अपने ग्राहकों को समय सीमाओं के भीतर प्रतिस्पर्धी मूल्य पर सर्वोत्तम गुणवत्ता वाले प्रदर्शन उत्पादों प्रदान करने के लिए प्रतिबद्ध हैं और साथ ही कीटनाशकों के नए नमूने खोजने, विकसित करने और प्रदान करने के लिए भी अपनी कुल गुणवत्ता नियंत्रण और गुणवत्ता आश्वासन नीति को पूरा करते हुए अपने कर्मचारियों के स्वास्थ्य और सुरक्षा को कमी करते हुए नहीं।`;
    } else if (language === "Marathi") {
        mission = 'आमचे मिशन';
        info = `आम्ही आमच्या ग्राहकांना समयमळ अतिरिक्त प्रतिस्पर्धी किंमतावर उच्च गुणवत्तेचे प्रदर्शन उत्पादन प्रदान करण्यासाठी प्रतिबद्ध आहोत आणि साथ ही कीटनाशकांच्या नवीन नमुना शोधून, विकसित करून आणि प्रदान करून तसेच आमच्या कुल गुणवत्ता नियंत्रण आणि गुणवत्ता आश्वासन धोरणांचा पूर्ण करण्यासाठी आमच्या कर्मचारींच्या आरोग्य आणि सुरक्षेची कमी करून नाही.`;
    }
    return (
        <div className="varela-round-regular flex flex-col md:flex-row md:justify-between ">
            <div className="md:w-3/4 shadow-xl z-30 bg-stone-200 p-10">
                <h1 className={`text-2xl md:text-3xl font-extrabold mb-4`}>{mission}</h1>
                <p className='font-light'>
                    {info}
                </p>
            </div>
            <div className="md:w-1/4 h-72 hidden md:block">
                <img src="/mission.png" alt="ceo" className="h-full w-full" />
            </div>
        </div>
    )
}

export default Mission