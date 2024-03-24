import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import { WiDirectionUpRight } from "react-icons/wi";
import { motion } from "framer-motion";

export default function AboutSection() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional smooth scrolling
        });
    };

    const language = useSelector((state: RootState) => state.languageReducer.language);

    let aboutUs = '';
    let aboutText = '';


    if (language === 'English') {
        aboutUs = "About Us";
        aboutText = `Enjo-Chem Agrochemical Industries, led by CEO Mr. Arun Murlidhar Kotame, embodies a legacy of innovation and commitment to agricultural sustainability. Founded in 2011, the company has swiftly risen to prominence as a leading manufacturer of crop protection products, micronutrients, pesticides, and fertilizers. Enjo-Chem's mission is rooted in enhancing agricultural productivity while prioritizing the well-being of farmers and communities. By leveraging science and technology, the company delivers innovative solutions aimed at fostering resilient and prosperous agriculture. Enjo-Chem's vision extends globally, aspiring to be a trusted source of agricultural inputs, setting benchmarks in quality and customer satisfaction. Upholding core values of ethics, transparency, innovation, and environmental stewardship, Enjo-Chem maintains rigorous standards of total quality control and research and development leadership. With a dedicated team of professionals, the company remains steadfast in its pursuit of revolutionizing agriculture through continuous improvement and performance-driven products, marking a transformative journey in the field of agrochemicals. company remains steadfast in its pursuit of revolutionizing agriculture through continuous improvement and performance-driven products, marking a transformative journey in the field of agrochemicals.`;
    } else if (language === 'Marathi') {
        aboutUs = "आमच्याबद्दल";
        aboutText = `एन्जो-केम अॅग्रोकेमिकल इंडस्ट्रीज, मुख्य कार्यकारी अरुण मुरलीधर कोटामे यांच्या नेतृत्वाखालील, कृषीच्या टिकाऊतेच्या आणि अभिवृद्धीच्या वारसेचा प्रतिष्ठान आहे. 2011 मध्ये स्थापित झालेल्या कंपनीने वापरणी उत्पादनांच्या, माइक्रोन्यूट्रिएंट्सच्या, कीटनाशकांच्या आणि खतांच्या अग्रणी निर्मात्याच्या रूपात त्वरितपणे उभे आहे. एन्जो-केमचे मिशन कृषीच्या उत्पादनशक्तीचे वाढवणे आहे, त्यांच्या विश्वासू ग्राहकांच्या आणि समुदायांच्या कल्याणाच्या प्राधान्याच्या सोयीसाठी. विज्ञान आणि तंत्रज्ञानाचा वापर करून, कंपनीने उद्यमी शेतीविद्यांसाठी अविकसित उपाय देते. एन्जो-केमचे आदर्श विश्वव्यापी आहे, ज्याने कृषीसाठीच्या प्रविष्टींची विश्वस्तरीय मान्यता आणि ग्राहक संतुष्टीचे मानक ठरवते. नैतिकता, पारदर्शिता, उद्योगशीलता आणि पर्यावरणीय संरक्षणाच्या मूल्यांचा पालन करणारे एन्जो-केम एकदिवसीय गुणवत्ता नियंत्रण आणि संशोधन नेतृत्व ठेवते. एक व्यावसायिक तंत्रज्ञांच्या टीमच्या सहभागाने, कंपनी शेतीविज्ञानातील सुधारणा आणि प्रदर्शन-निर्मित उत्पादनांच्या माध्यमातून कृषीविज्ञानाच्या क्षेत्रातील एक बदलाची यात्रा करण्याच्या उद्योगातील दृढतेने आहे.`;
    } else if (language === 'Hindi') {
        aboutUs = "हमारे बारे में";
        aboutText = `एन्जो-केम एग्रोकेमिकल इंडस्ट्रीज, सीईओ मिस्टर अरुण मुरलीधर कोटामे के नेतृत्वामध्ये, कृषी स्थायित्वाच्या विचारांच्या आणि प्रतिबद्धतेच्या वारसेचा आदर्श आहे. 2011 मध्ये स्थापित झालेल्या कंपनीने वापरणी उत्पादनांच्या, मायक्रोन्यूट्रिएंट्सच्या, कीटनाशकांच्या आणि खतांच्या अग्रणी निर्मात्याच्या रूपात त्वरितपणे उभे आहे. एन्जो-केमचे मिशन कृषीच्या उत्पादनशक्तीचे वाढवणे आहे, त्यांच्या विश्वासू ग्राहकांच्या आणि समुदायांच्या कल्याणाच्या प्राधान्याच्या सोयीसाठी. विज्ञान आणि तंत्रज्ञानाचा वापर करून, कंपनीने उद्यमी शेतीविद्यांसाठी अविकसित उपाय देते. एन्जो-केमचे आदर्श विश्वव्यापी आहे, ज्याने कृषीसाठीच्या प्रविष्टींची विश्वस्तरीय मान्यता आणि ग्राहक संतुष्टीचे मानक ठरवते. नैतिकता, पारदर्शिता, उद्योगशीलता आणि पर्यावरणीय संरक्षणाच्या मूल्यांचा पालन करणारे एन्जो-केम एकदिवसीय गुणवत्ता नियंत्रण आणि संशोधन नेतृत्व ठेवते. एक व्यावसायिक तंत्रज्ञांच्या टीमच्या सहभागाने, कंपनी शेतीविज्ञानातील सुधारणा आणि प्रदर्शन-निर्मित उत्पादनांच्या माध्यमातून कृषीविज्ञानाच्या क्षेत्रातील एक बदलाची यात्रा करण्याच्या उद्योगातील दृढतेने आहे.`;
    }

    return (
        <section className=" text-white relative pt-12 md:pt-0 pb-8" style={{ backgroundImage: "url('/spray.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* Content */}
            <div className='px-6 xl:px-10 xl:py-20 relative'>
                <h1 className="text-2xl md:text-5xl font-extrabold pb-2 xl:pb-8">{aboutUs}</h1>
                <motion.div
                    className="md:text-2xl">
                    {aboutText}
                </motion.div>
                <motion.button
                    initial={{ opacity: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    className="border-2 rounded-md bg-green-800 w-48 h-10 mt-4 flex flex-row gap-2 justify-center items-center"
                    onClick={scrollToTop}
                >
                    <Link to="/about" className="flex flex-row text-white justify-center items-center">
                        {language === "English" && "Read More"}
                        {language === "Hindi" && "और पढ़ें"}
                        {language === "Marathi" && "अधिक वाचा"}
                    </Link>
                    <WiDirectionUpRight className="text-3xl pt-1" />
                </motion.button>
            </div>
        </section>
    )
}
