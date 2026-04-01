import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "motion/react";

import Group from "/src/ui/Group";
import ActionButton from "./ActionButton";
import Paragraph from "/src/ui/Paragraph";
import HiddenSections from "./HiddenSections";

import buttons from "/src/data/navigationData";

export default function HeaderMenu({ isOpen, setIsOpen }) {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{
                        clipPath: "circle(0% at calc(100% - 24px) 24px)",
                        opacity: 0,
                    }}
                    animate={{
                        clipPath: "circle(150% at calc(100% - 24px) 24px)",
                        opacity: 1,
                    }}
                    exit={{
                        clipPath: "circle(0% at calc(100% - 24px) 24px)",
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute -top-1 -right-4 border border-primary bg-white rounded-4xl overflow-hidden w-70 h-90 sm:w-80 sm:h-100 z-40 shadow-2xl"
                >
                    <Group classname={"p-6 sm:p-8 relative w-full h-full flex flex-col justify-between"}>
                        <Paragraph classname="text-sm font-bold text-quaternary font-headlines uppercase tracking-wider">Menu</Paragraph>
                        
                        <Group classname={"flex flex-col gap-6 text-2xl font-medium"}>
                            {buttons.map((button, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.15 }}
                                >
                                    <Link
                                        key={index}
                                        to={button.link}
                                        href={`#${button.link}`}
                                        smooth={true}
                                        spy={true}
                                        duration={500}
                                        offset={-80}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setIsOpen(false);
                                        }}
                                        onSetActive={() => setActiveIndex(index)}
                                        className={`group/navitem relative flex flex-col cursor-pointer w-fit transition-colors duration-300 focus:outline-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded ${activeIndex === index ? "text-primary" : "hover:text-primary"}`}
                                    >
                                        {button.name}
                                        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full transition-all duration-300 ease-in-out ${activeIndex === index ? "w-full opacity-100" : "w-0 opacity-0 group-hover/navitem:w-full group-hover/navitem:opacity-100"}`} />
                                    </Link>
                                </motion.div>
                            ))}
                            <HiddenSections setActiveIndex={setActiveIndex} />
                        </Group>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <ActionButton padding={"w-full flex items-center justify-center text-center py-3 sm:py-4"} />
                        </motion.div>
                    </Group>
                </motion.div>
            )}
        </AnimatePresence>
    );
}