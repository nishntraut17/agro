import React from 'react';
import NewNavMenuItems from './NewNavMenuItems';
import { IoMdClose } from "react-icons/io";

const NewNavMenu = ({ isCollapsed, setIsCollapsed }: {
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <>
            {!isCollapsed &&
                <div className={`flex flex-col md:hidden h-screen w-screen fixed top-0 right-0 bg-slate-100 px-6 py-8 transition-opacity duration-1000 ease-in-out ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
                    <button onClick={() => setIsCollapsed(!isCollapsed)} className='flex justify-end'><IoMdClose className='h-8 w-8' /></button>
                    <NewNavMenuItems setIsCollapsed={setIsCollapsed} />
                </div>
            }
        </>
    )
}

export default NewNavMenu;
