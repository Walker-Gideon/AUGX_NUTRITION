import { Link } from "react-scroll";

import Group from "/src/ui/Group";

export default function Logo() {
    return (
        <Group>
            <Link
                to="hero"
                smooth={true}
                spy={true}
                duration={500}
                offset={-100}
                className={"font-headlines text-2xl font-bold cursor-pointer uppercase"}
            >
                AUGX
            </Link>
        </Group>
    );
}