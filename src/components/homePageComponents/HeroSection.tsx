import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function HeroSection() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let text = "";

    if (language === "English") {
        text = "Premium Agricultural Goods for Farmer Prosperity!";
    } else if (language === "Hindi") {
        text = "किसान समृद्धि के लिए प्रीमियम कृषि उत्पाद!";
    } else if (language === "Marathi") {
        text = "कृषी उत्पादकांच्या समृद्धीसाठी प्रीमियम कृषि वस्त्रे!";
    }

    return (
        <div className="py-3 md:py-5 lg:py-8 flex flex-col md:flex-row items-center justify-center px-4 lg:px-10 varela-round-regular">
            <div className="p-2 lg:w-3/4 lg:mb-0 flex flex-col gap-4">
                <h1 className="font-extrabold text-2xl lg:text-4xl">
                    {text}
                </h1>
                <p className="lg:text-xl">
                    {language === "English" && (
                        <>
                            Enjo-Chem Agrochemical is dedicated to providing premium agricultural goods for farmer prosperity. As a leading manufacturer of crop protection, micronutrients, pesticides, and fertilizers, we are committed to advancing agricultural productivity and sustainability.<br /> Our innovative solutions encompass a wide range of crop protection products, fertilizers, plant growth regulators (PGR), pesticides, and micronutrient solutions. By empowering farmers and nourishing communities, we leverage science and technology to create a more resilient and prosperous agriculture industry.
                        </>
                    )}
                    {language === "Hindi" && (
                        <>
                            एन्जो-केम एग्रोकेमिकल किसान समृद्धि के लिए प्रीमियम कृषि उत्पाद प्रदान करने के लिए समर्पित है। फसल संरक्षण, माइक्रोन्यूट्रिएंट्स, कीटनाशक और उर्वरकों के अग्रणी निर्माता के रूप में, हम कृषि उत्पादकता और स्थायित्व को बढ़ाने के लिए प्रतिबद्ध हैं।<br /> हमारे नवाचारी समाधान फसल संरक्षण उत्पादों, उर्वरकों, पौधों के विकास नियंत्रक (पीजीआर), कीटनाशकों और माइक्रोन्यूट्रिएंट समाधानों की एक विस्तृत श्रेणी को समावेश करते हैं। किसानों को सशक्त बनाने और समुदायों को पोषित करके, हम विज्ञान और प्रौद्योगिकी का उपयोग करके एक अधिक संवेदनशील और समृद्ध कृषि उद्योग बनाने में सहायता करते हैं।
                        </>
                    )}
                    {language === "Marathi" && (
                        <>
                            एन्जो-केम अॅग्रोकेमिकल शेतकऱ्यांना समृद्धीसाठी प्रीमियम कृषी वस्त्रे पुरवण्यास समर्पित आहे. फळांची संरक्षण, मायक्रोन्यूट्रिएंट्स, कीटकनाशके आणि खते यांच्या अग्रणी निर्माता म्हणून, आम्ही कृषी उत्पादकता आणि सततत्वाच्या मार्गाने आग्रही आहोत.<br /> आमचे नवीनतम उपाय फळांची संरक्षण उत्पादने, खते, वनस्पती विकास नियंत्रक (पीजीआर), कीटकनाशके आणि मायक्रोन्यूट्रिएंट समाधाने आढळतात. शेतकऱ्यांना सशक्त करून आणि समुदायांना पोषित करून, आम्ही विज्ञान आणि प्रौद्योगिकीचा वापर करून एक अधिक प्रतिस्पर्धी आणि समृद्ध कृषी उद्योग तयार करतो.
                        </>
                    )}
                </p>
            </div>
            <div className="lg:w-1/5 h-80">
                <img src='/Header.png' alt="header" className="mx-auto lg:mx-0 h-full" />
            </div>
        </div>
    )
}