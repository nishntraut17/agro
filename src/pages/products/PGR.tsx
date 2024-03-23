import ProductCard2 from "../../components/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function PGR() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let allPGR = "Plant Growth Regulators"
    if (language === 'English') {
        allPGR = "Plant Growth Regulators"
    } else if (language === 'Hindi') {
        allPGR = "सभी पौध वृद्धि नियंत्रक"
    } else if (language === 'Marathi') {
        allPGR = "सर्व झाड वाढवणारे नियंत्रक"
    }
    return (
        <div>
            <div className="h-[300px] overflow-hidden">
                <img src='/aboutbackground.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className="text-4xl font-extrabold py-4 px-8 bg-green-50 lg:px-20">{allPGR}</div>
            <ProductCard2 filter={"pgr"} />
        </div>
    );
} 