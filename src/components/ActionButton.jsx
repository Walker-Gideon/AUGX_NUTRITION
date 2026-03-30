import { LuAlignJustify, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

import Span from "/src/ui/Span";
import Button from "/src/ui/Button";

export default function ActionButton({ padding, menu, onclick, state }) {
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
        <Button onclick={onclick} primary={true} padding={padding} classname={"flex items-center gap-2 text-white border-primary bg-primary shadow-xl/30 hover:shadow-xl/40"}>
            <Span>Order Now</Span>
        </Button>
    );
}