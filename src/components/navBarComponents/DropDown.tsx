import MenuItems from "./MenuItems";
const Dropdown = ({
    submenus,
    dropdown,
    depthLevel
}: {
    submenus: any;
    dropdown: boolean;
    depthLevel: number;

}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={
            `dropdown ${dropdownClass} ${dropdown ? "show" : ""}`
        } > {
                submenus.map((submenu: any, index: number) => (<
                    MenuItems items={
                        submenu
                    }
                    key={index}
                    depthLevel={
                        depthLevel
                    }
                />
                ))
            }
        </ul>
    );
};

export default Dropdown;