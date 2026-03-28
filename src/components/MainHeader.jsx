import { useState } from "react";
import { Link } from "react-scroll";

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
                <Group classname={"large:hidden"}>
                    <ActionButton
                        menu={true}
                        onclick={handleMenu}
                    />
                </Group>
            </Group>
            <Group classname="absolute top-2.5 right-4.5 md:right-8.5 overflow-hidden">
                {open && <Menu isOpen={open} setIsOpen={setOpen} />}
            </Group>
        </Header>
    );
}

function Menu({ isOpen, setIsOpen }) {
    // ${isOpen ? `w-70 h-110 md:w-82 md:h-120 lg:w-92` : `w-13 h-13`}
    // backdrop-blur-md
    return (
        <Group classname={`border border-primary bg-white rounded-4xl overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "w-70 h-110 medium:w-82 medium:h-85" : "hidden"}`}>
            <Group classname={"p-6 medium:p-8 relative w-full h-full flex flex-col justify-between"}>
                <Paragraph classname="text-sm font-bold text-quaternary font-headlines">Menu</Paragraph>
                
                <Group classname={"w-17 h-35 flex flex-col justify-between text-2xl font-medium"}>
                    {buttons.map((button, index) => (
                        <Link
                            key={index}
                            to={button.link}
                            smooth={true}
                            spy={true}
                            duration={500}
                            offset={-100}
                            onClick={() => setIsOpen(false)}
                            className={`group/navitem flex cursor-pointer hover:text-primary transition-all duration-500 ease-in-out font-headlines`}
                        >
                            {button.name}
                            <span
                            // ${activeIndex === index ? "w-full opacity-100" : "w-0 opacity-0 group-hover/navitem:w-full group-hover/navitem:opacity-100"}
                                className={`
                                    absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full
                                    transition-all duration-300 ease-in-out
                                    
                                `}
                            />
                        </Link>
                    ))}
                </Group>
                <ActionButton />
            </Group>
        </Group>
    );
}