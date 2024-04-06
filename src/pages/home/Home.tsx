import HeroSection from "../../components/homePageComponents/HeroSection";
import AboutSection from "../../components/homePageComponents/AboutSection";
import ProductsSection from "../../components/homePageComponents/ProductsSection";
import IncrementerSection from "../../components/homePageComponents/IncrementerSection";
import LeafletMap from "../../components/homePageComponents/MapSection";
import Banner from "../../components/homePageComponents/Banner";
import React from "react";

export default function Home() {
    return (
        <>
            <Banner />
            <HeroSection />
            <AboutSection />
            <IncrementerSection />
            <LeafletMap />
            <ProductsSection />
        </>
    );
}