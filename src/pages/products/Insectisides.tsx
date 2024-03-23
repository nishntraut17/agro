import ProductCard2 from "../../components/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function Insectisides() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let allInsedticides = "All Insectisides"
    if (language === 'English') {
        allInsedticides = "All Insectisides"
    } else if (language === 'Hindi') {
        allInsedticides = "सभी कीटनाशक"
    } else if (language === 'Marathi') {
        allInsedticides = "सर्व कीटनाशक"
    }
    return (
        <div>
            <div className="h-[300px] overflow-hidden">
                <img src='/aboutbackground.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className="text-4xl font-extrabold py-4 px-8 bg-green-50 lg:px-20">{allInsedticides}</div>
            <ProductCard2 filter={"insecticide"} />
        </div>
    );
} 