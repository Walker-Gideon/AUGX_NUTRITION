import { Link } from "react-scroll";

import Group from "/src/ui/Group";
import Image from "/src/ui/Image";

import logo from "/src/assets/logo000.png";

export default function Logo() {
    return (
        <Group>
            <Link
                to="hero"
                smooth={true}
                spy={true}
                duration={500}
                offset={-100}
                className={"cursor-pointer flex items-center"}
            >
                <Image source={logo} alternate="AUGX Logo" classname="h-15 medium:h-20 w-auto object-contain" />
            </Link>
        </Group>
    );
}