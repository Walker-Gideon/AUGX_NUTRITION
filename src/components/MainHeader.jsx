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
                <Group classname={"large:hidden z-50 relative"}>
                    <ActionButton
                        menu={true}
                        state={open}
                        onclick={handleMenu}
                    />
                </Group>
            </Group>
            <Group classname={"large:hidden absolute -top-0 right-10 overflow-hidden z-40"}>
                <Menu isOpen={open} setIsOpen={setOpen} />
            </Group>
        </Header>
    );
}

function Menu({ isOpen, setIsOpen }) {
    return (
        <Group classname={`border border-primary bg-white rounded-4xl overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "w-65 h-80 medium:w-80 medium:h-90" : "w-11.5 h-11.5"}`}>
            <Group classname={"p-6 medium:p-8 relative w-full h-full flex flex-col justify-between"}>
                <Paragraph classname="text-sm font-bold text-quaternary font-headlines">Menu</Paragraph>
                
                <Group classname={"w-17 h-35 medium:h-38 flex flex-col justify-between text-2xl font-medium"}>
                    {buttons.map((button, index) => (
                        <Link
                            key={index}
                            to={button.link}
                            smooth={true}
                            spy={true}
                            duration={500}
                            offset={-100}
                            onClick={() => setIsOpen(false)}
                            className={`flex cursor-pointer hover:text-primary transition-all duration-500 ease-in-out font-headlines relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${button.afterWidth}`}
                        >
                            {button.name}
                        </Link>
                    ))}
                </Group>
                <ActionButton padding={"w-full flex items-center justify-center text-center py-3 middle:py-3.5"} />
            </Group>
        </Group>
    );
}