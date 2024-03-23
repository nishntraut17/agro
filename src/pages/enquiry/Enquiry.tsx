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

export default function Enquiry() {
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
            <div className="h-[300px] overflow-hidden">
                <img src='/aboutbackground.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col gap-4 w-1/2 sm:mt-20 ml-28 md:ml-8'>
                    <div className="">
                        <h1 className="text-3xl font-extrabold py-4">{translatedText.contactUs}</h1>
                        <ContactInfo icon={<FaLocationDot className="text-lg " />} title={translatedText.officeTitle} content={translatedText.officeContent} />
                        <ContactInfo icon={<FaPhoneVolume className="text-lg " />} title={translatedText.phoneTitle} content={translatedText.phoneContent} />
                        <ContactInfo icon={<MdEmail className="text-lg " />} title={translatedText.emailTitle} content={translatedText.emailContent} />
                        <ContactInfo icon={<FaLocationDot className="text-lg " />} title={translatedText.branchTitle} content={translatedText.branchContent} />
                    </div>
                    <div className="border-4 rounded-xl h-[310px] overflow-hidden">
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

                <form action="" method="" className="mx-auto mt-16 max-w-xl sm:mt-20 w-1/2">
                    <div>
                        <div className='text-3xl font-extrabold py-4'>{translatedText.enquiry}</div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                {translatedText.firstName}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                {translatedText.lastName}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                {translatedText.email}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                {translatedText.phoneNumber}
                            </label>
                            <div className="relative mt-2.5">
                                <input
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                {translatedText.message}
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-green-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
                        >
                            Sent message
                        </button>
                    </div>
                </form>
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
