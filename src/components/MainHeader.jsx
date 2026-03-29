import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "motion/react";

import Logo from "./Logo";
import Group from "/src/ui/Group";
import Header from "/src/ui/Header";
import Navigation from "./Navigation";
import ActionButton from "./ActionButton";
import Paragraph from "/src/ui/Paragraph";

import buttons from "/src/data/navigationData";

export default function MainHeader() {
    const [open, setOpen] = useState(false);

    function handleMenu() {
        setOpen(prev => !prev);
    }

    return (
        <Header classname={"h-15 w-full px-4 md:px-10 lg:px-16 top-6 z-50 bg-transparent fixed"}>
            <Group classname={"w-full flex items-center justify-between"}>
                <Logo />
                <Navigation />
                <Group classname={"hidden large:flex"}>
                    <ActionButton />
                </Group>
                <Group classname={"large:hidden z-50 relative"}>
                    <ActionButton
                        menu={true}
                        state={open}
                        onclick={handleMenu}
                    />
                    <Menu isOpen={open} setIsOpen={setOpen} />
                </Group>
            </Group>
        </Header>
    );
}

function Menu({ isOpen, setIsOpen }) {
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
                                        to={button.link}
                                        smooth={true}
                                        spy={true}
                                        duration={500}
                                        offset={-100}
                                        onClick={() => setIsOpen(false)}
                                        className={`inline-block cursor-pointer hover:text-primary transition-all duration-300 ease-in-out font-headlines relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${button.afterWidth}`}
                                    >
                                        {button.name}
                                    </Link>
                                </motion.div>
                            ))}
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