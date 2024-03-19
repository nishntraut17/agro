import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { RootState } from "../redux/store";
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
            coordinates: [20.5937, 78.9629], // India
            title: "India",
        },
        {
            id: 2,
            coordinates: [51.5074, -0.1278], // London
            title: "London",
        },
        {
            id: 3,
            coordinates: [40.7128, -74.0060], // New York
            title: "New York",
        },
    ];

    const language = useSelector((state: RootState) => state.languageReducer.language);

    const getTextByLanguage1 = () => {
        switch (language) {
            case "English":
                return "WE ARE ON THE WORLD";
            case "Hindi":
                return "हम दुनिया पर हैं";
            case "Marathi":
                return "आम्ही जगावर आहोत";
            default:
                return "WE ARE ON THE WORLD"; // Default text in English
        }
    };


    const getTextByLanguage2 = () => {
        switch (language) {
            case "English":
                return (
                    <p className="text-lg font-semibold text-left text-green-200">
                        The company Swaroop Agrochemical Industries was launched by Mr. Sameer
                        Pathare, a Chemical Engineer from Mumbai in 1993. The start-up activity
                        was trading and re-packing of various agro chemicals and hormones
                        useful for grape cultivation and focused area.
                    </p>
                );
            case "Hindi":
                return (
                    <p className="text-lg font-semibold text-left text-green-200">
                        स्वरुप एग्रोकेमिकल इंडस्ट्रीज़ कंपनी का आग्रह श्री समीर पठारे ने 1993 में मुंबई के एक रासायनिक इंजीनियर द्वारा किया था। शुरुआती गतिविधि ग्रेप उत्पादन और केंद्रित क्षेत्र के लिए उपयोगी विभिन्न कृषि रसायनों और हार्मोनों के व्यापार और पुनर्पैक करने की थी।
                    </p>
                );
            case "Marathi":
                return (
                    <p className="text-lg font-semibold text-left text-green-200">
                        स्वरुप एग्रोकेमिकल इंडस्ट्रीज़ कंपनीची स्थापना मुंबईच्या श्री समीर पठारे यांनी 1993 मध्ये केली होती. प्रारंभिक गतिविधा ड्रेप उत्पादन आणि केंद्रित क्षेत्रासाठी उपयुक्त विविध कृषी रसायन आणि हार्मोन्सचे व्यापार आणि पुनर्पैक करणे होते.
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
            <div className="flex flex-col justify-center space-y-8 lg:flex-row lg:space-x-8 bg-green-950 p-4 lg:p-40">
                <div className="border-4 rounded-xl w-full h-[400px] overflow-hidden">
                    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px' }}>
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
                    <h1 className="text-5xl font-bold mb-4 text-green-400">{getTextByLanguage1()}</h1>
                    <div>
                        {getTextByLanguage2()}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
