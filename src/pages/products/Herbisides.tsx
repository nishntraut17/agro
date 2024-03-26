import ProductCard2 from "../../components/products/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function Herbisides() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let allHerbisides = "All Herbisides"
    if (language === 'English') {
        allHerbisides = "All Herbisides"
    } else if (language === 'Hindi') {
        allHerbisides = 'सभी शाकनाशी'
    } else if (language === 'Marathi') {
        allHerbisides = 'सर्व शाकनाशी'
    }
    return (
        <div>
            <div className="max-h-[300px] overflow-hidden">
                <img src='/aboutbackground.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className="text-4xl font-extrabold py-4 px-8 bg-green-50 lg:px-20">{allHerbisides}</div>
            <ProductCard2 filter={"herbicide"} />
        </div>
    );
} 