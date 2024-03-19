import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import IncrementerSection from "../components/IncrementerSection";
import LeafletMap from "../components/MapSection";
// import Temp from "../components/Temp";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <IncrementerSection />
            <LeafletMap />
            <ProductsSection />
            {/* <Temp /> */}
        </div>
    );
}