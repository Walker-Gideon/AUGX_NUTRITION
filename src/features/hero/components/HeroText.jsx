import { LuArrowDown } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";

import Flex from "/src/ui/Flex";
import Span from "/src/ui/Span";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";
import ActionButton from "/src/components/ActionButton";
import { useTypewriter } from "/src/hooks/useTypewriter";

export default function HeroText() {
    const { displayed, isDone: showIcon } = useTypewriter({
        text: "Free delivery available",
        typeSpeed: 80,
        eraseSpeed: 40,
        pauseAfter: 1800,
    });

    return (
        <Group classname={"w-full lg:w-2/3"}>
            <HeaderTexts classname={"text-4xl medium:text-5xl text-primary font-headlines font-semibold uppercase w-full"}>
                <Paragraph classname={"hero-line [text-shadow:2px_3px_12px_rgba(175,61,59,0.25)] [animation-delay:0.1s]"}>Fuel Your Body.</Paragraph>
                <Paragraph classname={"hero-line [text-shadow:2px_3px_12px_rgba(175,61,59,0.25)] [animation-delay:0.35s]"}>Elevate Your Training.</Paragraph>
            </HeaderTexts>

            <HeaderTexts secondary={true} classname={"py-4 px-4 medium:px-16 middle:px-0 mb-6 text-base medium:text-lg text-quaternary font-text w-full"}>
              Premium supplements designed to support
              muscle growth, recovery and performance.
            </HeaderTexts>

            <Flex classname={"items-center justify-center middle:justify-start gap-2 medium:gap-4"}>
                <ActionButton icon={false} padding={"py-3.5 px-8 middle:px-10"} />

                <Button classname={"border flex items-center gap-2 rounded-full py-3.5 px-4 middle:px-6 cursor-pointer text-xs uppercase font-semibold font-headlines group shadow-xl/30 whitespace-nowrap"}>
                    <Span>Learn More</Span>
                    <LuArrowDown size={18} className="group-hover:translate-y-1 duration-500 transition-all" />
                </Button>
            </Flex>

            <Paragraph classname={"text-sm text-primary font-text w-full my-5 medium:my-8 middle:my-6 flex items-center justify-center middle:justify-start gap-2 px-4"}>
                <Span>
                    {displayed}
                    <span className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-0.5 animate-pulse" />
                </Span>
                <span className={`transition-opacity duration-300 ${showIcon ? "opacity-100" : "opacity-0"}`}>
                    <CiDeliveryTruck size={18} />
                </span>
            </Paragraph>
        </Group>
    );
}