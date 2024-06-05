import PageHeader from "../../components/extra/PageHeader";
import ProductCard2 from "../../components/products/ProductCard2";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function PGR() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let allPGR = "Plant Growth Regulators"
    let extraInfo = "Enjo-Chem Crop Care, Subsidiary of Enjo-Chem Agrochemical Industries"
    if (language === 'English') {
        allPGR = "Plant Growth Regulators";
        extraInfo = "Enjo-Chem Crop Care, Subsidiary of Enjo-Chem Agrochemical Industries"
    } else if (language === 'Hindi') {
        allPGR = "सभी पौध वृद्धि नियंत्रक";
        extraInfo = "एन्जो-केम क्रॉप केयर, एन्जो-केम कृषि रसायन उद्योग की सहायक कंपनी"
    } else if (language === 'Marathi') {
        allPGR = "सर्व झाड वाढवणारे नियंत्रक";
        extraInfo = "एन्जो-केम क्रॉप केयर, एन्जो-केम कृषि रसायन उद्योगाची सहाय्यक कंपनी";
    }
    return (
        <div className="bg-slate-50 varela-round-regular">
            <PageHeader title={allPGR} />
            <div className="text-4xl font-extrabold py-4 px-8 lg:px-24">
                <div>{allPGR}</div>
                <div className="text-2xl font-bold pt-2">{extraInfo}</div>
            </div>
            <ProductCard2 filter={"pgr"} />
        </div>
    );
} 