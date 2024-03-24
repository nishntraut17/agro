import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavMenu = ({ isCollapsed, setIsCollapsed }: {
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;

}) => {

    return (
        <>
            {!isCollapsed && (
                <motion.aside
                    initial={{ width: 0 }}
                    animate={{ width: 300 }}
                    exit={{ width: 0, transition: { delay: 0.7, duration: 3 } }}
                    className="block md:hidden h-screen fixed top-0 right-0 backdrop-blur-sm bg-[#fffefbde] z-30 p-6"
                >
                    <FiMenu
                        className="block md:hidden text-xl cursor-pointer"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    />
                    <ul className="flex flex-col gap-10 items-center mt-8">
                        <li>
                            <Link
                                to={"/"}
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/products"}
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/about"}
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contact"}
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-semibold text-gray-600"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </motion.aside>
            )}
        </>
    );
};

export default NavMenu;
