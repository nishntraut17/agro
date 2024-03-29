import ProductCard2 from "../../components/products/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function MicroFertilizers() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let allMicroNutrientFertilizers = "All Micro Nutrients Fertilizers";
    if (language === 'English') {
        allMicroNutrientFertilizers = "All Micro Nuitrients Fertilizers"
    } else if (language === 'Hindi') {
        allMicroNutrientFertilizers = 'सभी माइक्रो न्यूट्रिएंट उर्वरक'
    } else if (language === 'Marathi') {
        allMicroNutrientFertilizers = 'सर्व मायक्रो न्यूट्रिएंट खते'
    }
    return (
        <div>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className="text-4xl font-extrabold py-4 px-8 bg-green-50 lg:px-20">{allMicroNutrientFertilizers}</div>
            <ProductCard2 filter={"micronutrients-fertiliser"} />
        </div>
    );
} 