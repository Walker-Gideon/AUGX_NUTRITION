import { useState } from "react";
import { Link } from "react-scroll";

import Span from "/src/ui/Span";
import Group from "/src/ui/Group";
import HiddenSections from "./HiddenSections";

import buttons from "/src/data/navigationData";

export default function Navigation() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <nav className={"hidden large:flex w-2/5 lg:w-1/3 border border-white rounded-full py-3.5 px-10 bg-white shadow-xl/20 transition-all group font-headlines text-sm font-semibold"}>
            <Group classname={"w-full flex items-center justify-center text-center gap-6"}>
                {buttons.map((button, index) => (
                    <Link
                        key={index}
                        to={button.link}
                        href={`#${button.link}`}
                        smooth={true}
                        spy={true}
                        duration={500}
                        offset={-80}
                        onClick={() => setActiveIndex(index)}
                        onSetActive={() => setActiveIndex(index)}
                        className={`
                            group/navitem
                            ${button.styling}
                            relative flex flex-col items-center cursor-pointer transition-colors duration-300 focus:outline-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded
                            ${activeIndex === index ? "text-primary" : "hover:text-primary"}
                        `}
                    >
                        <Span classname={"relative w-fit"}>
                            {button.name}
                            <span
                                className={`
                                    absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full
                                    transition-all duration-300 ease-in-out
                                    ${activeIndex === index ? "w-full opacity-100" : "w-0 opacity-0 group-hover/navitem:w-full group-hover/navitem:opacity-100"}
                                `}
                            />
                        </Span>
                    </Link>
                ))}
            </Group>
            <HiddenSections setActiveIndex={setActiveIndex} />
        </nav>
    );
}