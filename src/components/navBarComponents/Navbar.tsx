import { menuItemsEnglish } from "./menuItemsList";
import { menuItemsHindi } from "./menuItemsListHindi";
import { menuItemsMarathi } from "./menuItemsMarathi";

import MenuItems from "./MenuItems";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LanguageUpdater from "../Language/LanguageUpdater";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import NewNavMenu from "./NewNavMenu";

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    let menuItems = [];
    const language = useSelector((state: RootState) => state.languageReducer.language);
    if (language === "Hindi") {
        menuItems = menuItemsHindi;
    }
    else if (language === "English") {
        menuItems = menuItemsEnglish;
    } else if (language === 'Marathi') {
        menuItems = menuItemsMarathi;
    } else {
        menuItems = menuItemsEnglish;
    }

    return (
        <div className='flex shadow-sm sticky top-0 backdrop-blur-sm bg-white opacity-90 z-[1800]'>
            <div className="flex justify-center items-center py-3 opacity-100 w-1/3 md:w-1/6">
                <Link to='/' className="">
                    <img src="/ENJO.png" alt="logo" className="h-[5rem] w-full" />
                </Link>
            </div>

            <nav className="w-2/3 md:w-5/6  flex flex-col gap-4 bg-slate-100">
                <div className="flex flex-col lg:flex-row justify-end md:gap-8 shadow-sm top-0 backdrop-blur-sm bg-green-500">
                    <div>Kisan Helpline: +919699375115</div>
                    <div>8275017003</div>
                    <div>support@enjochemagro.com</div>
                </div>
                <div className="flex flex-row justify-center items-center gap-1 pb-4">
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <ul className="hidden md:flex md:flex-row md:gap-4" > {
                            menuItems.map((menu: any, index: number) => {
                                const depthLevel = 0;
                                return <MenuItems items={
                                    menu
                                }
                                    key={
                                        index
                                    }
                                    depthLevel={
                                        depthLevel
                                    }
                                />;
                            })
                        }
                        </ul>
                        <LanguageUpdater />
                    </div>
                    <FiMenu
                        className="block md:hidden text-xl cursor-pointer mr-3"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    />
                    <NewNavMenu setIsCollapsed={setIsCollapsed}
                        isCollapsed={isCollapsed} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;