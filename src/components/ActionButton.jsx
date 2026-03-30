import { Link } from "react-scroll";
import { motion, AnimatePresence } from "motion/react";
import { LuAlignJustify, LuX, LuArrowDown } from "react-icons/lu";

import Span from "/src/ui/Span";
import Button from "/src/ui/Button";

export default function ActionButton({ padding, menu, onclick, state, classname }) {
    if (menu) {
        return (
            <Button onclick={onclick} primary={true} padding={"p-2 medium:p-2.5"} classname={`group relative flex items-center gap-1 text-white z-50 ${state ? "" : "border-primary bg-primary shadow-xl/30 hover:shadow-xl/40"}`}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={state ? "close" : "open"}
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {state ? <LuX size={24} className="group-hover:scale-110 duration-500 transition-all text-primary" /> : <LuAlignJustify size={24} className="group-hover:scale-110 duration-500 transition-all" />}
                    </motion.div>
                </AnimatePresence>
            </Button>
        );
    }

    return (
        <Link
            to="products"
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            className={`border rounded-full cursor-pointer text-xs font-headlines group transition-all uppercase font-semibold whitespace-nowrap flex items-center gap-2 text-white border-primary bg-primary shadow-xl/30 hover:shadow-xl/40 ${classname} ${padding ? `${padding}` : `py-3 middle:py-3.5 middle:px-6 px-4`}`}
        >
            <Span>Order Now</Span>
            <LuArrowDown size={18} className="group-hover:translate-y-1 duration-500 transition-all" />
        </Link>
    );
}