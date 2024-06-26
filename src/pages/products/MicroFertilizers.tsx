import PageHeader from "../../components/extra/PageHeader";
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
        <div className='bg-slate-50 varela-round-regular'>
            <PageHeader title={allMicroNutrientFertilizers} />
            <div className="text-4xl font-extrabold py-4 px-8 lg:px-24">{allMicroNutrientFertilizers}</div>
            <ProductCard2 filter={"micronutrients-fertiliser"} />
        </div>
    );
} 