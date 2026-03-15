import { LuArrowDown } from "react-icons/lu";

import Button from "/src/ui/Button";

export default function ActionButton() {
    return (
        <Button primary={true} classname={"flex items-center gap-2"}>
            Order Now
            <LuArrowDown size={18} className=" group-hover:animate-bounce transition-all" />
        </Button>
    );
}