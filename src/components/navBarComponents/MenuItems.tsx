import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./DropDown";
import { Link } from "react-router-dom";

const MenuItems = ({
    items,
    depthLevel
}: {
    items: any;
    depthLevel: number;
}) => {
    const [dropdown, setDropdown] = useState(false);

    const ref = useRef<HTMLLIElement>(null); // Specify the type of ref

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler as EventListener);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler as EventListener);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        if (window.innerWidth > 960) {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth > 960) {
            setDropdown(false);
        }
    };

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title} {depthLevel > 0 ? <span className=""> &raquo; </span> : <span className="arrow absolute top-5" />}
                    </button>
                    <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <Link to={`/${items.url}`} onClick={handleLinkClick}>{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItems;
