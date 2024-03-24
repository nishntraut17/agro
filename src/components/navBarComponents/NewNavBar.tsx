import {
    menuItemsEnglish
} from "./menuItemsList";
import { menuItemsHindi } from "./menuItemsListHindi";
import { menuItemsMarathi } from "./menuItemsMarathi";

import MenuItems from "./MenuItems";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LanguageUpdater from "../LanguageUpdater";
import { useState } from "react";
import NavMenu from "./NavMenu";
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
        <nav className="flex flex-row justify-between items-center shadow-sm sticky md:px-24 top-0 backdrop-blur-sm bg-white z-[1200]">
            <div className="box flex justify-between items-center py-3">
                <Link to='/'>
                    <img src="/ENJO.png" alt="logo" className="h-16 w-32" />
                </Link>
            </div>
            <div className="flex flex-row">
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
                className="block md:hidden text-xl cursor-pointer"
                onClick={() => setIsCollapsed(!isCollapsed)}
            />
            <NewNavMenu setIsCollapsed={setIsCollapsed}
                isCollapsed={isCollapsed} />
        </nav>
    );
};

export default NewNavbar;