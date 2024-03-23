import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FaInstagram, FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    const translatedText = getTranslatedText(language); // Define this function to fetch translated text

    return (
        <div className="relative bg-lime-950 p-8 text-white bg-cover bg-center" >
            <div className="z-20">
                <div className="py-10 px-4 sm:px-6 lg:px-8">
                    {/* Company Description */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="col-span-1">
                            <img src='/ENJO.png' alt="logo" className="h-28 w-72" />
                            <p className="text-sm mt-4 ml-8">
                                {translatedText.companyDescription}
                            </p>
                        </div>

                        {/* Our Products */}
                        <div className="col-span-1 mt-20 mx-8">
                            <h1 className="text-2xl font-bold mb-4">{translatedText.ourProducts}</h1>
                            <ul className="flex flex-col gap-5 font-semibold">
                                <li>{translatedText.cropProtection}</li>
                                <ul className="ml-5">
                                    <li>{translatedText.insectisides}</li>
                                    <li>{translatedText.fungicides}</li>
                                    <li>{translatedText.herbicides}</li>
                                </ul>
                                <li>{translatedText.micronutrients}</li>
                                <li>{translatedText.biofertilisers}</li>
                                <li>{translatedText.pgr}</li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="col-span-1 sm:col-span-1 mt-20">
                            <h1 className="text-2xl font-bold mb-4">{translatedText.contactUs}</h1>
                            <ContactInfo icon={<FaLocationDot className="text-lg text-white" />} title={translatedText.officeTitle} content={translatedText.officeContent} />
                            <ContactInfo icon={<FaPhoneVolume className="text-lg text-white" />} title={translatedText.phoneTitle} content={translatedText.phoneContent} />
                            <ContactInfo icon={<MdEmail className="text-lg text-white" />} title={translatedText.emailTitle} content={translatedText.emailContent} />
                            <ContactInfo icon={<FaLocationDot className="text-lg text-white" />} title={translatedText.branchTitle} content={translatedText.branchContent} />
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-t border-gray-400 my-6" />

            <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
                {/* Social Icons */}
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <a href='https://www.instagram.com/enjo_chem?igsh=MXRrcGRiajJ1Zzl2NA%3D%3D&utm_source=qr' target='_blank' rel='noreferrer noopener' className="text-3xl"><FaInstagram /></a>
                    <a href='https://www.facebook.com/share/TLFua9MGvwceGrsH/?mibextid=hu50Ix' target='_blank' rel='noreferrer noopener' className="text-3xl"><FaFacebookSquare /></a>
                    <a href='https://x.com/enjochem8733?s=21&t=CnVxyHoohRO8ord7FIvguA' target='_blank' rel='noreferrer noopener' className="text-3xl"><FaTwitter /></a>
                    <a href='https://www.linkedin.com/company/enjo-chem-agrochemical-industries/' target='_blank' rel='noreferrer noopener' className="text-3xl"><FaLinkedin /></a>
                    <a href='https://youtube.com/@enjo-chemagrochemicalindus4018?si=KDHTtiA4JW9Q7nco' target='_blank' rel='noreferrer noopener' className="text-3xl"><FaYoutube /></a>
                </div>
                {/* Copyright */}
                <div className="text-sm text-center sm:text-left mb-4 sm:mb-0">&copy; {new Date().getFullYear()} {translatedText.companyName}, {translatedText.allRightsReserved}</div>
                {/* Navigation */}
                <div className="flex items-center gap-4">
                    <button className="">{translatedText.about}</button>
                    <button className="">{translatedText.products}</button>
                    <button className="">{translatedText.services}</button>
                </div>
            </div>
        </div>
    );

}


// Contact Information component
function ContactInfo({ icon, title, content }: { icon: JSX.Element, title: string, content: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="bg-green-500 rounded-full p-2">{icon}</div>
            <div>
                <h1 className="text-lg font-bold">{title}</h1>
                <p className="text-sm ">{content}</p>
            </div>
        </div>
    );
}

function getTranslatedText(language: string) {
    switch (language) {
        case "English":
            return {
                companyName: "Enjo-Chem Agrochemical Industries",
                companyDescription: "Enjo-Chem Agrochemical is a Manufacturer of Crop protection, Micronutrients, Pesticides and Fertilisers. Enjo-Chem is a leading agrochemical company dedicated to advancing agricultural productivity and sustainability. Our innovative solutions have a wide range of crop protection products, fertilisers, PGR, Pesticides and Micronutrients solutions. Committed to empowering farmers and nourishing communities, we leverage science and technology to create a more resilient and prosperous agriculture industry.",
                ourProducts: "Our Products",
                cropProtection: "Crop Protection",
                insectisides: "Insectisides",
                fungicides: "Fungicides",
                herbicides: "Herbicides",
                micronutrients: "Micronutrients Ferilizers",
                biofertilisers: "Biofertilisers",
                pesticides: "Pesticides",
                fertilisers: "Fertilisers",
                pgr: "Plant Growth Regulators",
                contactUs: "Contact us",
                officeTitle: "Office & Mfg. Premises",
                officeContent: "Survey No. 53-2/1, Kotangaon, Tal. Yeola, Dist. Nashik, Maharashtra, India - 423401",
                phoneTitle: "Phone",
                phoneContent: "+91 9420318312, +91 9579291495",
                emailTitle: "Email",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "Branch Office",
                branchContent: "B-14/10/12, Colgate Chauk, MIDC Walug Kh, Gangapur, Chh. Sambhajinagar-431136",
                about: "About",
                products: "Products",
                services: "Services",
                allRightsReserved: "All Rights Reserved",
            };
        case "Marathi":
            return {
                companyName: "एन्जो-केम अॅग्रोकेमिकल इंडस्ट्रीज",
                companyDescription: "एन्जो-केम अॅग्रोकेमिकल एक क्रॉप प्रोटेक्शन, मायक्रोन्यूट्रिएंट्स, पेस्टिसाइड्स आणि फर्टिलायझर्सचे निर्माता आहे. एन्जो-केम हे एक अग्रणी अॅग्रोकेमिकल कंपनी आहे ज्याने कृषीविज्ञान आणि शेतीविज्ञानाचा वापर करून कृषीची उत्पादनशीलता आणि सतततेचे वाढवण्यास समर्पित आहे. आमच्या अभिनव उपायांमुळे आपल्याला क्रॉप प्रोटेक्शन उत्पादनांची विशाल रेंज, फर्टिलायझर्स, पीजीआर, पेस्टिसाइड्स आणि मायक्रोन्यूट्रिएंट्स उपायांची आहे. कृषीक्षमतेची सुरक्षा करण्यासाठी आणि समुदायांना पोषित करण्यासाठी प्रतिबद्ध असून, आपल्याला विज्ञान आणि तंत्रज्ञानाचा वापर करून एक अधिक प्रतिस्पर्धी आणि समृद्ध कृषी उद्योग तयार करण्यासाठी प्रयत्नशील आहोत.",
                ourProducts: "आमचे उत्पादन",
                cropProtection: "क्रॉप प्रोटेक्शन",
                insectisides: "कीटनाशके",
                fungicides: "फंगीसाइड्स",
                herbicides: "जैविक नाशके",
                micronutrients: "मायक्रोन्यूट्रिएंट्स फर्टिलायझर्स",
                biofertilisers: "जैविक खते",
                pesticides: "पेस्टिसाइड्स",
                fertilisers: "फर्टिलायझर्स",
                pgr: "प्लांट ग्रोथ रेग्युलेटर्स",
                contactUs: "आमच्याशी संपर्क साधा",
                officeTitle: "कार्यालय आणि निर्माण ठिकाण",
                officeContent: "सर्वेक्षण क्रमांक 53-2/1, कोटांगाव, ता. येवला, जि. नाशिक, महाराष्ट्र, भारत - 423401",
                phoneTitle: "फोन",
                phoneContent: "+91 9420318312, +91 9579291495",
                emailTitle: "ईमेल",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "शाखा कार्यालय",
                branchContent: "बी-14/10/12, कोलगेट चौक, मिडसी वाळूग खंड, गंगापूर, छ. संभाजीनगर-431136",
                about: "विषयी",
                products: "उत्पादने",
                services: "सेवा",
                allRightsReserved: "सर्व हक्क राखीव",
            };
        case "Hindi":
            return {
                companyName: "एन्जो-केम एग्रोकेमिकल इंडस्ट्रीज",
                companyDescription: "एन्जो-केम एग्रोकेमिकल एक क्रॉप प्रोटेक्शन, माइक्रोन्यूट्रिएंट्स, पेस्टिसाइड्स और फर्टिलाइजर्स का निर्माता है। एन्जो-केम एक अग्रणी एग्रोकेमिकल कंपनी है जो कृषि उत्पादकता और स्थायित्व को बढ़ाने के लिए समर्पित है। हमारे नवाचारी समाधानों में क्रॉप प्रोटेक्शन उत्पादों, फर्टिलाइजर्स, पीजीआर, पेस्टिसाइड्स और माइक्रोन्यूट्रिएंट्स के विस्तृत रेंज हैं। किसानों को सशक्त बनाने और समुदायों को पोषित करने के लिए प्रतिबद्ध होकर, हम विज्ञान और प्रौद्योगिकी का उपयोग करके एक अधिक संवेदनशील और समृद्ध कृषि उद्योग बनाने का प्रयास करते हैं।",
                ourProducts: "हमारे उत्पाद",
                cropProtection: "क्रॉप प्रोटेक्शन",
                micronutrients: "माइक्रोन्यूट्रिएंट्स फर्टिलाइझर्स",
                biofertilizers: "जैविक खाद",
                pesticides: "पेस्टिसाइड्स",
                fertilisers: "फर्टिलाइजर्स",
                pgr: "प्लांट ग्रोथ रेगुलेटर्स",
                contactUs: "हमसे संपर्क करें",
                officeTitle: "कार्यालय और निर्माण स्थल",
                officeContent: "सर्वेक्षण संख्या 53-2/1, कोटांगाव, ता. येवला, जि. नासिक, महाराष्ट्र, भारत - 423401",
                phoneTitle: "फोन",
                phoneContent: "+91 9420318312, +91 9579291495",
                emailTitle: "ईमेल",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "शाखा कार्यालय",
                branchContent: "बी-14/10/12, कोलगेट चौक, मिडसी वाळूग खंड, गंगापूर, छ. संभाजीनगर-431136",
                about: "के बारे में",
                products: "उत्पाद",
                services: "सेवाएं",
                allRightsReserved: "सर्वाधिकार सुरक्षित",
            };
        default:
            return {
                companyName: "Enjo-Chem Agrochemical Industries",
                companyDescription: "Enjo-Chem Agrochemical is a Manufacturer of Crop protection, Micronutrients, Pesticides and Fertilisers. Enjo-Chem is a leading agrochemical company dedicated to advancing agricultural productivity and sustainability. Our innovative solutions have a wide range of crop protection products, fertilisers, PGR, Pesticides and Micronutrients solutions. Committed to empowering farmers and nourishing communities, we leverage science and technology to create a more resilient and prosperous agriculture industry.",
                ourProducts: "Our Products",
                cropProtection: "Crop Protection",
                micronutrients: "Micronutrients",
                pesticides: "Pesticides",
                fertilisers: "Fertilisers",
                pgr: "PGR",
                contactUs: "Contact us",
                officeTitle: "Office & Mfg. Premises",
                officeContent: "Survey No. 53-2/1, Kotangaon, Tal. Yeola, Dist. Nashik, Maharashtra, India - 423401",
                phoneTitle: "Phone",
                phoneContent: "+91 9420318312, +91 9579291495",
                emailTitle: "Email",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "Branch Office",
                branchContent: "B-14/10/12, Colgate Chauk, MIDC Walug Kh, Gangapur, Chh. Sambhajinagar-431136",
                about: "About",
                products: "Products",
                services: "Services",
                allRightsReserved: "All Rights Reserved",
            };
    }
}
