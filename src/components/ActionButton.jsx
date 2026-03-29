import { LuArrowDown, LuAlignJustify, LuX } from "react-icons/lu";

import Span from "/src/ui/Span";
import Button from "/src/ui/Button";

export default function ActionButton({ icon = true, padding, menu, onclick, state }) {
    // border-primary bg-primary shadow-xl/30 hover:shadow-xl/40
    if (menu) {
        return (
            <Button onclick={onclick} primary={true} padding={"p-2 medium:p-2.5"} classname={`group relative flex items-center gap-1 text-white z-50 ${state ? "" : "border-primary bg-primary shadow-xl/30 hover:shadow-xl/40"}`}>
                {state ? <LuX size={24} className="group-hover:scale-110 duration-500 transition-all text-primary" /> : <LuAlignJustify size={24} className="group-hover:scale-110 duration-500 transition-all" />}
            </Button>
        );
    }

    return (
        <Button primary={true} padding={padding} classname={"flex items-center gap-2 text-white border-primary bg-primary shadow-xl/30 hover:shadow-xl/40"}>
            <Span>Order Now</Span>
            {/* {icon && <LuArrowDown size={18} className=" group-hover:translate-y-1 duration-500 transition-all" />} */}
        </Button>
    );
}