import ProductCard2 from "../../components/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function Fungisides() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let allFungicides = "All Fungicides"
    if (language === 'English') {
        allFungicides = "All Fungicides"
    } else if (language === 'Hindi') {
        allFungicides = "सभी फंगाइसाइड्स"
    } else if (language === 'Marathi') {
        allFungicides = "सर्व फंगाइसाइड्स"
    }
    return (
        <div>
            <div className="h-[300px] overflow-hidden">
                <img src='/aboutbackground.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className="text-4xl font-extrabold py-4 px-8 bg-green-50 lg:px-20">{allFungicides}</div>
            <ProductCard2 filter={"fungicide"} />
        </div>
    );
} 