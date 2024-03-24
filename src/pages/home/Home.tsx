import HeroSection from "../../components/homePageComponents/HeroSection";
import AboutSection from "../../components/homePageComponents/AboutSection";
import ProductsSection from "../../components/homePageComponents/ProductsSection";
import IncrementerSection from "../../components/homePageComponents/IncrementerSection";
import LeafletMap from "../../components/homePageComponents/MapSection";
import Banner from "../../components/homePageComponents/Banner";
// import Temp from "../components/Temp";

export default function Home() {
    return (
        <div>
            <Banner />
            <HeroSection />
            <AboutSection />
            <IncrementerSection />
            <LeafletMap />
            <ProductsSection />
            {/* <Temp /> */}
        </div>
    );
}