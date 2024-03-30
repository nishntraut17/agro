import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface MarkerData {
    id: number;
    coordinates: [number, number];
    title: string;
}

export default function LeafletMap() {
    const transition = {
        duration: 1,
        type: "spring",
    };

    const markers: MarkerData[] = [
        {
            id: 1,
            coordinates: [20.055690, 74.489860], // Nashik
            title: "Nashik",
        },
        {
            id: 2,
            coordinates: [19.895210, 75.373050], // Sambhajinagar
            title: "SambhaJinagar",
        },
        {
            id: 3,
            coordinates: [20.700216, 77.008171],
            title: "Akola",
        }
    ];

    const language = useSelector((state: RootState) => state.languageReducer.language);

    const getTextByLanguage1 = () => {
        switch (language) {
            case "English":
                return "WHERE ARE WE LOCATED?";
            case "Hindi":
                return "हम कहाँ स्थित हैं?";
            case "Marathi":
                return "आम्ही कुठेत आहोत?";
            default:
                return "WHERE ARE WE LOCATED?"; // Default text in English
        }
    };


    const getTextByLanguage2 = () => {
        switch (language) {
            case "English":
                return (
                    <p className="md:text-lg md:font-semibold text-left text-green-200">
                        The Head Office of Enjo-Chem Agrochemical Industries is located at B-14/10/12, Colgate chawk, MIDC waluj Kh, Gangapur, Chh. Sambhajinagar-431136. <br /> Manufacturing Plant is located at Survey No. 53-2/1, Kotangaon, Tal. Yeola, Dist. Nashik, Maharashtra, India - 423401. <br /> Sales Office is located at Akola, Maharashtra, India.
                    </p>
                );
            case "Hindi":
                return (
                    <p className="md:text-lg md:font-semibold text-left text-green-200">
                        एन्जो-केम एग्रोकेमिकल इंडस्ट्रीज का मुख्यालय बी-14/10/12, कोलगेट चौक, एमआईडीसी वालुग ख, गंगापुर, छ. संभाजीनगर-431136 पर स्थित है। <br /> विनिर्माण संयंत्र सर्वेक्षण संख्या 53-2/1, कोटांगाव, ताल. येवला, जि. नाशिक, महाराष्ट्र, भारत - 423401 पर स्थित है। <br /> बिक्री कार्यालय अकोला, महाराष्ट्र, भारत पर स्थित है।
                    </p>
                );
            case "Marathi":
                return (
                    <p className="md:text-lg md:font-semibold text-left text-green-200">
                        "एन्जो-केम अॅग्रोकेमिकल इंडस्ट्रीजचा मुख्यालय बी-14/10/12, कोलगेट चौक, एमआईडीसी वालुग ख, गंगापुर, छ. संभाजीनगर-431136 येथे आहे. <br /> निर्माण संयंत्र सर्वेक्षण संख्या 53-2/1, कोटांगाव, ता. येवला, जि. नाशिक, महाराष्ट्र, भारत - 423401 येथे आहे. <br /> विक्री कार्यालय अकोला, महाराष्ट्र, भारत येथे आहे."
                    </p>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            initial={{ left: "0rem", top: "1rem" }}
            whileInView={{ left: "2rem" }}
            transition={transition}
        >
            <div className="flex flex-col justify-center space-y-8 lg:flex-row lg:space-x-8 bg-green-950 p-8 lg:pt-40 ">
                <div className="border-4 rounded-sm w-full h-[400px] overflow-hidden">
                    <MapContainer center={[19.766670, 74.475853]} zoom={6} style={{ height: '400px' }}>
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
                <div className="max-w-xl text-center lg:text-left">
                    <h1 className="text-2xl md:text-5xl font-bold md:font-extrabold mb-4 text-green-400 text-left">{getTextByLanguage1()}</h1>
                    <div className=''>
                        {getTextByLanguage2()}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
