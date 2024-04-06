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

const NewNavbar = () => {
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
        <div className='sticky top-0 w-full z-[1800]'>
            <div className="flex flex-col lg:flex-row justify-end md:gap-8 items-center shadow-sm md:px-24 top-0 backdrop-blur-sm bg-green-500">
                <div>Kisan Helpline: +919699375115</div>
                <div>8275017003</div>
                <div>support@enjochemagro.com</div>
            </div>
            <nav className="flex md:flex-col lg:flex-row justify-between items-center shadow-sm sticky md:px-24 top-0 backdrop-blur-sm bg-white opacity-90">
                <div className="flex justify-between items-center py-3 opacity-100">
                    <Link to='/'>
                        <img src="/ENJO.png" alt="logo" className="h-16 w-32" />
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row">
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
            </nav>
        </div>
    );
};

export default NewNavbar;