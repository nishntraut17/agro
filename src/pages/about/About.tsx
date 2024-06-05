import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Ceo from "../../components/aboutComponents/Ceo";
import AboutCompany from "../../components/aboutComponents/AboutCompany";
import Vision from "../../components/aboutComponents/Vision";
import Mission from "../../components/aboutComponents/Mission";
import AboutValues from "../../components/aboutComponents/AboutValues";
import PageHeader from "../../components/extra/PageHeader";

export default function About() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let aboutUs = 'About Us';
    if (language === 'English') {
        aboutUs = 'About Us';
    } else if (language === "Hindi") {
        aboutUs = 'हमारे बारे में';
    } else if (language === 'Marathi') {
        aboutUs = 'आमच्याबद्दल';
    }

    return (
        <main className="varela-round-regular flex flex-col">
            <PageHeader title={aboutUs} />
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
