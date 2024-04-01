import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface MarkerData {
    id: number;
    coordinates: [number, number];
    title: string;
}

export default function Contact() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    const translatedText = getTranslatedText(language);

    const markers: MarkerData[] = [
        {
            id: 1,
            coordinates: [20.055690, 74.489860], // Nashik
            title: "Nashik",
        },
        {
            id: 2,
            coordinates: [19.895210, 75.373050], // Sambhajinagar
            title: "Sambhajinagar",
        },
        {
            id: 3,
            coordinates: [20.700216, 77.008171],
            title: "Akola",
        }
    ];

    return (
        <div className="mb-20">
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className='flex flex-col md:flex-row gap-4 sm:mt-20 mx-6 md:mx-20 lg:mx-40'>
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-extrabold py-4">{translatedText.contactUs}</h1>
                    <ContactInfo icon={<FaLocationDot className="text-lg text-white" />} title={translatedText.officeTitle} content={translatedText.officeContent} />
                    <ContactInfo icon={<FaPhoneVolume className="text-lg text-white" />} title={translatedText.phoneTitle} content={translatedText.phoneContent} />
                    <ContactInfo icon={<MdEmail className="text-lg text-white" />} title={translatedText.emailTitle} content={translatedText.emailContent} />
                    <ContactInfo icon={<FaLocationDot className="text-lg text-white" />} title={translatedText.branchTitle} content={translatedText.branchContent} />
                    <ContactInfo icon={<FaPhoneVolume className="text-lg text-white" />} title={translatedText.headOfficePhone} content={translatedText.headOfficeContact} />
                    <ContactInfo icon={<FaPhoneVolume className="text-lg text-white" />} title={translatedText.kishanHelplineText} content={translatedText.kishanHelpLine} />
                    <ContactInfo icon={<FaLocationDot className="text-lg  text-white" />} title={translatedText.akolaOfficeText} content={translatedText.akolaOffice} />
                </div>
                <div className="md:w-1/2 border rounded h-[450px] overflow-hidden">
                    <MapContainer center={[19.766670, 74.475853]} zoom={6} className='h-full w-full'>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {markers.map(marker => (
                            <Marker key={marker.id} position={marker.coordinates}>
                                <Popup>
                                    {marker.title}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

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
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phoneNumber: "Phone Number",
                message: "Message",
                enquiry: "Enquiry",
                companyName: "Enjo-Chem Agrochemical Industries",
                contactUs: "Contact us",
                officeTitle: "Office & Mfg. Premises",
                officeContent: "Survey No. 53-2/1, kotamgaon, Tal. Yeola, Dist. Nashik, Maharashtra, India - 423401",
                phoneTitle: "Phone",
                phoneContent: "+91 8275017003, +91 9579291495",
                emailTitle: "Email",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "Head Office",
                branchContent: "B-14/10/12, Colgate Chawk, MIDC waluj Kh, Gangapur, Chh. Sambhajinagar-431136",
                headOfficePhone: "Head Office Contact",
                headOfficeContact: "8275017003",
                kishanHelplineText: "Kishan Helpline",
                kishanHelpLine: "+919699375115",
                akolaOffice: "C/O. Padmavati Udhyg, near MIDC Police station, MIDC no. 2, 444004",
                akolaOfficeText: "Akola Sales Office"
            };
        case "Marathi":
            return {
                firstName: "पहिले नाव",
                lastName: "आडनाव",
                email: "ईमेल",
                phoneNumber: "फोन नंबर",
                message: "संदेश",
                enquiry: "विचारांविषयी",
                companyName: "एन्जो-केम अॅग्रोकेमिकल इंडस्ट्रीज",
                contactUs: "आमच्याशी संपर्क साधा",
                officeTitle: "कार्यालय आणि निर्माण ठिकाण",
                officeContent: "सर्वेक्षण क्रमांक 53-2/1, कोटमगाव, ता. येवला, जि. नाशिक, महाराष्ट्र, भारत - 423401",
                phoneTitle: "फोन",
                phoneContent: "+91 8275017003, +91 9579291495",
                emailTitle: "ईमेल",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "मुख्य कार्यालय",
                branchContent: "बी-14/10/12, कोलगेट चौक, मिडसी वाळूज खंड, गंगापूर, छ. संभाजीनगर-431136",
                headOfficePhone: "मुख्य कार्यालय संपर्क",
                headOfficeContact: "8275017003",
                kishanHelplineText: "किसान सहाय्य लाईन",
                kishanHelpLine: "+919699375115",
                akolaOffice: "C/O. पद्मावती उद्योग, मिडसी पोलीस स्थानकाजवळ, मिडसी क्र. 2, 444004",
                akolaOfficeText: "अकोला विक्री कार्यालय"
            };
        case "Hindi":
            return {
                firstName: "पहला नाम",
                lastName: "उपनाम",
                email: "ईमेल",
                phoneNumber: "फोन नंबर",
                message: "संदेश",
                enquiry: "पूछताछ",
                companyName: "एन्जो-केम एग्रोकेमिकल इंडस्ट्रीज",
                contactUs: "हमसे संपर्क करें",
                officeTitle: "कार्यालय और निर्माण स्थल",
                officeContent: "सर्वेक्षण संख्या 53-2/1, कोटमगाव, ता. येवला, जि. नासिक, महाराष्ट्र, भारत - 423401",
                phoneTitle: "फोन",
                phoneContent: "+91 8275017003, +91 9579291495",
                emailTitle: "ईमेल",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "मुख्य कार्यालय",
                branchContent: "बी-14/10/12, कोलगेट चौक, मिडसी वाळूज खंड, गंगापूर, छ. संभाजीनगर-431136",
                headOfficePhone: "मुख्य कार्यालय संपर्क",
                headOfficeContact: "8275017003",
                kishanHelplineText: "किसान हेल्पलाइन",
                kishanHelpLine: "+919699375115",
                akolaOffice: "C/O. पद्मावती उद्योग, मिडसी पोलीस स्थानकाजवळ, मिडसी क्र. 2, 444004",
                akolaOfficeText: "अकोला विक्री कार्यालय"
            };
        default:
            return {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phoneNumber: "Phone Number",
                message: "Message",
                enquiry: "Enquiry",
                companyName: "Enjo-Chem Agrochemical Industries",
                contactUs: "Contact us",
                officeTitle: "Office & Mfg. Premises",
                officeContent: "Survey No. 53-2/1, kotamgaon, Tal. Yeola, Dist. Nashik, Maharashtra, India - 423401",
                phoneTitle: "Phone",
                phoneContent: "+91 8275017003, +91 9579291495",
                emailTitle: "Email",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "Head Office",
                branchContent: "B-14/10/12, Colgate Chawk, MIDC waluj Kh, Gangapur, Chh. Sambhajinagar-431136",
                headOfficePhone: "Head Office Contact",
                headOfficeContact: "8275017003",
                kishanHelplineText: "Kishan Helpline",
                kishanHelpLine: "+919699375115",
                akolaOffice: "C/O. Padmavati Udhyg, near MIDC Police station, MIDC no. 2, 444004",
                akolaOfficeText: "Akola Sales Office"
            };
    }
}
