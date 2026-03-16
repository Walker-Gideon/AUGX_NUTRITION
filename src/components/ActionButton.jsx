import { LuArrowDown } from "react-icons/lu";

import Button from "/src/ui/Button";

export default function ActionButton({ icon = true, padding }) {
    return (
        <Button primary={true} padding={padding} classname={"flex items-center gap-2"}>
            Order Now
            {icon && <LuArrowDown size={18} className=" group-hover:animate-bounce transition-all" />}
        </Button>
    );
}