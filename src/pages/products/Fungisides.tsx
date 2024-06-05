import ProductCard2 from "../../components/products/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import PageHeader from "../../components/extra/PageHeader";

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
        <div className="bg-slate-50 varela-round-regular">
            <PageHeader title={allFungicides} />
            <div className="text-4xl font-extrabold py-4 px-8 lg:px-24">{allFungicides}</div>
            <ProductCard2 filter={"fungicide"} />
        </div>
    );
} 