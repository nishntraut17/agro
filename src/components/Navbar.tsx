import { useState } from "react";
import LanguageUpdater from "./LanguageUpdater";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
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
        <header className="shadow-sm sticky md:px-24 top-0 backdrop-blur-sm bg-[#fffefc80] z-[1200]">
            <div className="box flex justify-between items-center py-3">
                {/* <Logo /> */}
                <Link to='/'>
                    <img src="/ENJO.png" alt="logo" className="h-14 w-22" />
                </Link>
                {/* Desktop navbar */}
                <nav className="hidden md:block">
                    {/* Navbar links */}
                    <ul className="flex gap-10">
                        <li>
                            <Link
                                to={"/"}
                                onClick={handleLinkClick}
                                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
                            >
                                {(translate as any)[language].home}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/products"}
                                onClick={handleLinkClick}
                                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
                            >
                                {(translate as any)[language].products}
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={"/about"}
                                onClick={handleLinkClick}
                                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
                            >
                                {(translate as any)[language].about}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contact"}
                                onClick={handleLinkClick}
                                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
                            >
                                {(translate as any)[language].contact}
                            </Link>
                        </li>
                    </ul>
                </nav>

                <LanguageUpdater />

                <FiMenu
                    className="block md:hidden text-xl cursor-pointer"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                />
                <NavMenu
                    setIsCollapsed={setIsCollapsed}
                    isCollapsed={isCollapsed}
                />
            </div>
        </header>
    );

    // return (
    //     <nav className="bg-green-100 h-20 fixed z-[1200] w-full">
    //         <div className="px-16">
    //             <div className="flex justify-between items-center">
    //                 <div className="h-20 w-40">
    //                     <img src="/ENJO.png" alt="logo" className="h-20 w-40" />
    //                 </div>
    //                 <div className="flex gap-12 text-lime-800">
    //                     <Link to="/" onClick={handleLinkClick} className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600">{(translate as any)[language].home}</Link>
    //                     <Link to="/products" onClick={handleLinkClick} className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600">{(translate as any)[language].products} </Link>
    //                     <Link to="/about" onClick={handleLinkClick} className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600" >{(translate as any)[language].about}</Link>
    //                     <Link to="/contact" onClick={handleLinkClick} className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600">{(translate as any)[language].contact}</Link>
    //                 </div>
    //                 <div className="flex">
    //                     <LanguageUpdater />
    //                 </div>
    //             </div>
    //         </div>
    //         <FiMenu
    //             className="block md:hidden text-xl cursor-pointer"
    //             onClick={() => setIsCollapsed(!isCollapsed)}
    //         />

    //         {/* Mobile navbar */}
    //         <NavMenu
    //             setIsCollapsed={setIsCollapsed}
    //             isCollapsed={isCollapsed}
    //         />
    //     </nav>
    // );
};
export default Navbar;

/*
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
            <FiMenu
                className="block md:hidden text-xl cursor-pointer"
                onClick={() => setIsCollapsed(!isCollapsed)}
            />

            <NavMenu
                setIsCollapsed={setIsCollapsed}
                isCollapsed={isCollapsed}
            />
        </nav>
    );
*/
