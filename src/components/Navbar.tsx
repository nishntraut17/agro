"use client"
import LanguageUpdater from "./LanguageUpdater";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);

    const translate = {
        English: {
            home: "Home",
            products: "Products",
            about: "About",
            contact: "Contact"
        },
        Marathi: {
            home: "होम",
            products: "उत्पादने",
            about: "आमच्याबद्दल",
            contact: "संपर्क"
        },
        Hindi: {
            home: "होम",
            products: "उत्पादन",
            about: "हमारे बारे में",
            contact: "संपर्क"
        }
    };
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="bg-green-100 h-20 fixed z-[1200] w-full">
            <div className="px-16">
                <div className="flex justify-between items-center">
                    <div className="h-20 w-40">
                        <img src="/ENJO.png" alt="logo" className="h-20 w-40" />
                    </div>
                    <div className="flex gap-12 text-lime-800">
                        <Link to="/" onClick={handleLinkClick} className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600">{(translate as any)[language].home}</Link>
                        <Link to="/products" onClick={handleLinkClick} className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600">{(translate as any)[language].products} </Link>
                        <Link to="/about" onClick={handleLinkClick} className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600" >{(translate as any)[language].about}</Link>
                        <Link to="/contact" onClick={handleLinkClick} className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600">{(translate as any)[language].contact}</Link>
                    </div>
                    <div className="flex">
                        <LanguageUpdater />
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
