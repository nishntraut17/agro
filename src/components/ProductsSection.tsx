import { Link } from "react-router-dom";
import { WiDirectionUpRight } from "react-icons/wi";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import productsEnglish from '../assets/products.json';
import productHindi from '../assets/productsHindi.json';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * index,
        },
    }),
}

const ProductsSection = () => {

    let products;
    const language = useSelector((state: RootState) => state.languageReducer.language);
    if (language === 'Hindi' || language === 'Marathi') {
        products = productHindi;
    }
    else {
        products = productsEnglish;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const getText = (englishText: string, hindiText: string, marathiText: string) => {
        switch (language) {
            case 'English':
                return englishText;
            case 'Hindi':
                return hindiText;
            case 'Marathi':
                return marathiText;
            default:
                return englishText;
        }
    };


    return (
        <div className="px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-4 pt-12 scale-90 text-green-900">
            <div className="col-span-1 md:col-span-2 p-4 flex flex-col gap-4">
                <h1 className="text-5xl font-bold mb-2 text-dark-green-custom">
                    {language === "English" && "Enjo-Chem Agrochemicals Products"}
                    {language === "Hindi" && "एन्जो-केम एग्रोकेमिकल उत्पाद"}
                    {language === "Marathi" && "एन्जो-केम अॅग्रोकेमिकल उत्पाद"}
                </h1>
                <p className="text-lg font-semibold">
                    {language === "English" && "Enjo-Chem Agrochemicals products are backed up by a strong R&D through in-house ANYLATICAL LABORATORY which is equipped with sophisticated laboratory equipments."}
                    {language === "Hindi" && "एन्जो-केम एग्रोकेमिकल उत्पाद एक मजबूत आर और डी के साथ समर्थित हैं, जो घरेलू एनालिटिकल प्रयोगशाला द्वारा सुसज्जित है जो विशेषज्ञ प्रयोगशाला उपकरणों से लैस है।"}
                    {language === "Marathi" && "एन्जो-केम अॅग्रोकेमिकल उत्पाद घरच्या एनालिटिकल प्रयोगशाळेद्वारे सुसज्जित असलेल्या उन्नत प्रयोगशाळा उपकरणांच्या सहाय्याने समर्थित आहेत."}
                </p>
                <motion.button
                    initial={{ opacity: 0.6 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                    className="border-2 rounded-md bg-green-800 w-48 h-10"
                    onClick={scrollToTop}
                >
                    <Link to="/products" className="flex flex-row text-white justify-center items-center">
                        {language === "English" && "View All Products"}
                        {language === "Hindi" && "सभी उत्पाद देखें"}
                        {language === "Marathi" && "सर्व उत्पादन पहा"}
                        <WiDirectionUpRight className="text-3xl" />
                    </Link>
                </motion.button>
            </div>
            {
                products.slice(0, 6).map((product, index) => (
                    <motion.div

                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        key={index}
                        className="col-span-1 md:col-span-1"
                    >
                        <div className="rounded-sm overflow-hidden bg-white shadow-sm flex flex-row justify-between hover:cursor-pointer hover:shadow-md border border-gray-200">
                            <div className="overflow-hidden flex justify-center items-center h-64">
                                <img
                                    src={`/products/${index + 1}.png`}
                                    alt="insecticide1"
                                    className="transition-transform duration-300 hover:scale-105 h-3/4 w-full"
                                />
                            </div>

                            <div className="p-4 hover:opacity-80">
                                <h1 className="text-xl font-bold mb-2">{product.name}</h1>
                                <p className="text-sm mb-2">{product.ingrediants}</p>
                                <h1 className="text-xl font-bold mb-2">{getText('Packing Size', 'पॅकिंग साईझ', 'पॅकिंग साईझ')}</h1>
                                <p className="text-sm mb-2">{product.packingSize}</p>
                                <h1 className="text-xl font-bold mb-2">{getText('Dosage', 'खुराक', 'खुराक')}</h1>
                                <p className="text-sm">{product.dosage}</p>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    );
};

export default ProductsSection;


// import { animate, motion, useScroll, useTransform } from "framer-motion";

// const ref = useRef<HTMLDivElement>(null);
// const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1 1"],
// });
// const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
// const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

// ref={ref}
// style={{
//     scale: scaleProgress,
//     opacity: opacityProgress,
// }}

