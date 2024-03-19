import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function Temp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="w-[400px] h-[400px] bg-green-100"
        >
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row justify-center"
            >
                <div className="text-5xl font-extrabold">Who are we?</div>
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <IoMdArrowDropdown className="" />
                </motion.div>
            </motion.button>
            <motion.ul
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <motion.li variants={itemVariants} className="">
                    ENJO-CHEM AGROCHEMICAL INDUSTRIES Established in the year of 2011 with a goal of achieving revolution in the area of agriculture by providing performance quality driven products and improving them continuously. The company has a team of professionally qualified & well experienced personnel in the field of manufacturing formulations of pesticides and marketing.
                </motion.li>
            </motion.ul>
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row justify-center"
            >
                <div className="text-5xl font-extrabold">What are we?</div>
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <IoMdArrowDropdown className="" />
                </motion.div>
            </motion.button>
            <motion.ul
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <motion.li variants={itemVariants} className="">We conduct business with ethics and integrity. We are proud of the products we manufacture and the efforts we put into them

                    and supply across the nation by providing solutions to optimize productivity of farmer through cost effective & innovative products to provide the farmers with better value for money. Our R & D wing constantly put in great efforts to innovate in the field. Our goal is to serve the farmers of our country by setting standards of quality, services and commitment. We measure our success based on the satisfaction of our valuable customers. Quality is our upper most priority.
                </motion.li>
            </motion.ul>
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row justify-center"
            >
                <div className="text-5xl font-extrabold">How we do?</div>
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <IoMdArrowDropdown className="" />
                </motion.div>
            </motion.button>
            <motion.ul
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <motion.li variants={itemVariants} className="">At the hearts of our business are innovations, ethical operations and collaborative mindset. We do business on the bases of our core value, based on that we achieve continuously growth and a reputation in market through our teamwork, transparency and integrity.</motion.li>
            </motion.ul>
        </motion.nav>
    );
}
