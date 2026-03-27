import { useState } from "react";
import { Link } from "react-scroll";

import Group from "/src/ui/Group";

import buttons from "/src/data/navigationData";

export default function Navigation() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <nav className={"hidden large:flex w-[35%] lg:w-[30%] border border-white rounded-full py-3.5 px-8 bg-white shadow-xl/20 transition-all group font-headlines text-sm font-semibold"}>
            <Group classname={"w-full flex items-center justify-center text-center gap-5"}>
                {buttons.map((button, index) => (
                    <Link
                        key={index}
                        to={button.link}
                        smooth={true}
                        spy={true}
                        duration={500}
                        offset={-100}
                        onClick={() => setActiveIndex(index)}
                        className={`
                            group/navitem
                            ${button.styling}
                            relative flex flex-col items-center cursor-pointer
                            transition-colors duration-300
                            ${activeIndex === index ? "text-primary" : "hover:text-primary"}
                        `}
                    >
                        {button.name}
                        <span
                            className={`
                                absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full
                                transition-all duration-300 ease-in-out
                                ${activeIndex === index ? "w-full opacity-100" : "w-0 opacity-0 group-hover/navitem:w-full group-hover/navitem:opacity-100"}
                            `}
                        />
                    </Link>
                ))}
            </Group>
        </nav>
    );
}