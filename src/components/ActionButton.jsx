import { LuArrowDown, LuAlignJustify } from "react-icons/lu";

import Span from "/src/ui/Span";
import Button from "/src/ui/Button";

export default function ActionButton({ icon = true, padding, menu, onclick }) {
    if (menu) {
        return (
            <Button onclick={onclick} primary={true} padding={"p-2 medium:p-2.5"} classname={"group flex items-center gap-1 text-white"}>
                <LuAlignJustify size={24} className="group-hover:scale-110 duration-500 transition-all" />
            </Button>
        );
    }

    return (
        <Button primary={true} padding={padding} classname={"flex items-center gap-2 text-white"}>
            <Span>Order Now</Span>
            {/* {icon && <LuArrowDown size={18} className=" group-hover:translate-y-1 duration-500 transition-all" />} */}
        </Button>
    );
}