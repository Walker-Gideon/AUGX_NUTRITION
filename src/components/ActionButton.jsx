import { LuArrowDown, LuChevronLeft } from "react-icons/lu";

import Span from "/src/ui/Span";
import Button from "/src/ui/Button";

export default function ActionButton({ icon = true, padding, menu }) {
    if (menu) {
        return (
            <Button primary={true} padding={padding} classname={"flex items-center gap-1"}>
                <Span>Menu</Span>
                <LuChevronLeft size={18} className=" group-hover:translate-x-1 duration-500 transition-all" />
            </Button>
        );
    }

    return (
        <Button primary={true} padding={padding} classname={"flex items-center gap-2"}>
            <Span>Order Now</Span>
            {icon && <LuArrowDown size={18} className=" group-hover:animate-bounce transition-all" />}
        </Button>
    );
}