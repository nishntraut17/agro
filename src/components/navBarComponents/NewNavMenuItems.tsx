import React, { useState } from 'react';
import { menuItemsEnglish } from './menuItemsList';
import { IoMdArrowDropdown } from "react-icons/io";

const NewNavMenuItems = () => {
    const [dropdownProducts, setDropdownProducts] = useState(false);
    const [dropdownCropProtection, setDropdownCropProtection] = useState(false);
    const [dropdownMedia, setDropdownMedia] = useState(false);
    const [dropdownGallery, setDropdownGallery] = useState(false);
    const [dropdownVerticals, setDropdownVerticals] = useState(false);

    const onClickHandler = (menu: any) => {
        switch (menu.title) {
            case 'Products':
                setDropdownProducts(!dropdownProducts);
                setDropdownMedia(false);
                setDropdownGallery(false);
                setDropdownVerticals(false);
                break;
            case 'Crop Protection':
                setDropdownCropProtection(!dropdownCropProtection);
                break;
            case 'Media':
                setDropdownMedia(!dropdownMedia);
                setDropdownProducts(false);
                setDropdownGallery(false);
                setDropdownVerticals(false);
                break;
            case 'Gallery':
                setDropdownGallery(!dropdownGallery);
                setDropdownMedia(false);
                setDropdownProducts(false);
                setDropdownVerticals(false);
                break;
            case 'Verticals':
                setDropdownVerticals(!dropdownVerticals);
                setDropdownMedia(false);
                setDropdownGallery(false);
                setDropdownProducts(false);
                break;
            default:
                break;
        }
    };

    return (
        <div className='flex flex-col gap-4 text-xl'>
            {menuItemsEnglish.map((menu, index) => (
                <div key={index}>
                    <button
                        onClick={() => onClickHandler(menu)}
                        className="transition-opacity duration-2000 ease-in-out focus:outline-none flex hover:bg-slate-200 hover:bg-opacity-50 hover:border-l hover:border-stone-300 w-full"
                    >
                        {menu.title}
                        {menu.title === 'Products' || menu.title === 'Media' || menu.title === 'Gallery' || menu.title === 'Verticals' ? <IoMdArrowDropdown /> : ''}
                    </button>
                    <ul className={`transition-opacity duration-2000 ease-in-out 
                        ${menu.title === 'Products' ? (dropdownProducts ? 'opacity-100' : 'opacity-0 hidden') : ''} 
                        ${menu.title === 'Media' ? (dropdownMedia ? 'opacity-100' : 'opacity-0 hidden') : ''} 
                        ${menu.title === 'Gallery' ? (dropdownGallery ? 'opacity-100' : 'opacity-0 hidden') : ''}
                        ${menu.title === 'Verticals' ? (dropdownVerticals ? 'opacity-100' : 'opacity-0 hidden') : ''}`}
                    >
                        {menu?.submenu?.map((subMenu, index) => (
                            <li key={index} className="pl-10">
                                <button
                                    onClick={() => onClickHandler(subMenu)}
                                    className="transition-opacity duration-2000 ease-in-out focus:outline-none flex"
                                >
                                    {subMenu.title}
                                    {subMenu.title === 'Crop Protection' ? <IoMdArrowDropdown /> : ''}
                                </button>
                                <ul className={`transition-opacity duration-2000 ease-in-out 
                                    ${subMenu.title === 'Crop Protection' ? (dropdownCropProtection ? 'opacity-100' : 'opacity-0 hidden') : ''}`}
                                >
                                    {subMenu?.submenu?.map((subSubMenu, index) => (
                                        <li key={index} className="pl-10">
                                            <a href={subSubMenu.url}>{subSubMenu.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default NewNavMenuItems;
