
import PageHeader from "../../components/extra/PageHeader";
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
        <div className="bg-slate-50 varela-round-regular">
            <PageHeader title={allProducts} />
            <div className="text-4xl font-extrabold py-4 px-8 lg:px-24">{allProducts}</div>
            <ProductCard2 filter={"none"} />
        </div>
    );
} 