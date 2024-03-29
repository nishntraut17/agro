import ProductCard2 from "../../components/products/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function BioFertilizers() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let allBioFertilizers = "All BioFertilizers"
    if (language === 'English') {
        allBioFertilizers = "All BioFertilizers"
    } else if (language === 'Hindi') {
        allBioFertilizers = "सभी उर्वरक"
    } else if (language === 'Marathi') {
        allBioFertilizers = "सर्व उर्वरक"
    }
    return (
        <div>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className="text-4xl font-extrabold py-4 px-8 bg-green-50 lg:px-20">{allBioFertilizers}</div>
            <ProductCard2 filter={"bio-fertilizer"} />
        </div>
    );
} 