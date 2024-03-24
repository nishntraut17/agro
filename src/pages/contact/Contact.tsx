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
            title: "India",
        },
        {
            id: 2,
            coordinates: [19.895210, 75.373050], // Sambhajinagar
            title: "London",
        },
    ];

    return (
        <div className="mb-20">
            <div className="max-h-[300px] overflow-hidden">
                <img src='/aboutbackground.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className='flex flex-col md:flex-row gap-4 sm:mt-20 mx-6 md:mx-20 lg:mx-40'>
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-extrabold py-4">{translatedText.contactUs}</h1>
                    <ContactInfo icon={<FaLocationDot className="text-lg " />} title={translatedText.officeTitle} content={translatedText.officeContent} />
                    <ContactInfo icon={<FaPhoneVolume className="text-lg " />} title={translatedText.phoneTitle} content={translatedText.phoneContent} />
                    <ContactInfo icon={<MdEmail className="text-lg " />} title={translatedText.emailTitle} content={translatedText.emailContent} />
                    <ContactInfo icon={<FaLocationDot className="text-lg " />} title={translatedText.branchTitle} content={translatedText.branchContent} />
                </div>
                <div className="md:w-1/2 border-4 rounded-xl h-[310px] overflow-hidden">
                    <MapContainer center={[19.766670, 74.475853]} zoom={6} style={{ height: '310px' }}>
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
                officeContent: "Survey No. 53-2/1, Kotangaon, Tal. Yeola, Dist. Nashik, Maharashtra, India - 423401",
                phoneTitle: "Phone",
                phoneContent: "+91 9420318312, +91 9579291495",
                emailTitle: "Email",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "Branch Office",
                branchContent: "B-14/10/12, Colgate Chauk, MIDC Walug Kh, Gangapur, Chh. Sambhajinagar-431136",
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
                officeContent: "सर्वेक्षण क्रमांक 53-2/1, कोटांगाव, ता. येवला, जि. नाशिक, महाराष्ट्र, भारत - 423401",
                phoneTitle: "फोन",
                phoneContent: "+91 9420318312, +91 9579291495",
                emailTitle: "ईमेल",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "शाखा कार्यालय",
                branchContent: "बी-14/10/12, कोलगेट चौक, मिडसी वाळूग खंड, गंगापूर, छ. संभाजीनगर-431136",
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
                officeContent: "सर्वेक्षण संख्या 53-2/1, कोटांगाव, ता. येवला, जि. नासिक, महाराष्ट्र, भारत - 423401",
                phoneTitle: "फोन",
                phoneContent: "+91 9420318312, +91 9579291495",
                emailTitle: "ईमेल",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "शाखा कार्यालय",
                branchContent: "बी-14/10/12, कोलगेट चौक, मिडसी वाळूग खंड, गंगापूर, छ. संभाजीनगर-431136",
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
                officeContent: "Survey No. 53-2/1, Kotangaon, Tal. Yeola, Dist. Nashik, Maharashtra, India - 423401",
                phoneTitle: "Phone",
                phoneContent: "+91 9420318312, +91 9579291495",
                emailTitle: "Email",
                emailContent: "support@enjochemagro.com, enjochemagro133@gmail.com",
                branchTitle: "Branch Office",
                branchContent: "B-14/10/12, Colgate Chauk, MIDC Walug Kh, Gangapur, Chh. Sambhajinagar-431136",
            };
    }
}