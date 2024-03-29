
import ProductCard2 from "../../components/products/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function ProductsPage() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let allProducts = "All Products"
    if (language === 'English') {
        allProducts = "All Products"
    } else if (language === 'Hindi') {
        allProducts = "सभी उत्पाद"
    } else if (language === 'Marathi') {
        allProducts = "सर्व उत्पाद"
    }
    return (
        <div>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className="text-4xl font-extrabold py-4 px-8 bg-green-50 lg:px-20">{allProducts}</div>
            <ProductCard2 filter={"none"} />
        </div>
    );
} 