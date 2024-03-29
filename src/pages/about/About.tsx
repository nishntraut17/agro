// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import Ceo from "../../components/aboutComponents/Ceo";
import AboutCompany from "../../components/aboutComponents/AboutCompany";
import Vision from "../../components/aboutComponents/Vision";
import Mission from "../../components/aboutComponents/Mission";
import AboutValues from "../../components/aboutComponents/AboutValues";

export default function About() {
    // const language = useSelector((state: RootState) => state.languageReducer.language);

    return (
        <main className="flex flex-col">
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className="px-4 md:px-20 text-green-950 md:text-2xl font-semibold flex flex-col gap-8">
                <Ceo />
                <AboutCompany />
                <Vision />
                <Mission />
                <AboutValues />
            </div>
        </main>
    );
}
