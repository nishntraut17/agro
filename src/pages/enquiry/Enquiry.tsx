import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
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
        {
            id: 3,
            coordinates: [20.700216, 77.008171],
            title: "Akola",
        }
    ];

    return (
        <div className="">
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className='flex flex-col md:flex-row md:gap-8 gap-4 p-8 md:p-16'>
                <div className='flex flex-col gap-4 md:w-1/2'>
                    <div className="border rounded h-[320px] md:h-[540px] md:mt-10 w-full overflow-hidden">
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

                <form action="" method="" className="md:w-1/2">
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
                branchContent: "B-14/10/12, Colgate chawk, MIDC waluj Kh, Gangapur, Chh. Sambhajinagar-431136",
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
                branchContent: "B-14/10/12, Colgate chawk, MIDC waluj Kh, Gangapur, Chh. Sambhajinagar-431136",
            };
    }
}
