import ProductCard2 from "../../components/products/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import PageHeader from "../../components/extra/PageHeader";

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
        <div className="bg-slate-50 varela-round-regular">
            <PageHeader title={allInsedticides} />
            <div className="text-4xl font-extrabold py-4 px-8 lg:px-24">{allInsedticides}</div>
            <ProductCard2 filter={"insecticide"} />
        </div>
    );
} 