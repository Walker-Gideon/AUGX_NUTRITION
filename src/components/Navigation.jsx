import { Link } from "react-scroll";

import Group from "/src/ui/Group";

const buttons = [
    {
        name: "Products",
        link: "products",
        styling: "flex-1"
    },
    {
        name: "Benefits",
        link: "benefits",
        styling: "flex-1"
    },
    {
        name: "About Us",
        link: "about",
        styling: "flex-1 whitespace-nowrap"
    }
];

export default function Navigation() {
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
                        className={`${button.styling} transition-colors duration-300 hover:text-primary cursor-pointer`}
                    >
                        {button.name}
                    </Link>
                ))}
            </Group>
        </nav>
    );
}