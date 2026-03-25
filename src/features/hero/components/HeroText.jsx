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
            <HeaderTexts classname={"text-4xl large:text-5xl font-headlines font-bold uppercase w-full"}>
                <Paragraph classname={"hero-line [text-shadow:2px_3px_12px_rgba(175,61,59,0.25)] [animation-delay:0.1s]"}>Fuel Your Body.</Paragraph>
                <Paragraph classname={"hero-line [text-shadow:2px_3px_12px_rgba(175,61,59,0.25)] [animation-delay:0.35s]"}>Elevate Your Training.</Paragraph>
            </HeaderTexts>

            <HeaderTexts secondary={true} classname={"py-4 px-4 middle:px-0 mb-6 text-base large:text-lg text-quaternary font-text w-full"}>
              Premium supplements designed to support
              muscle growth, recovery and performance.
            </HeaderTexts>

            <Flex classname={"items-center justify-center large:justify-start gap-2 large:gap-4"}>
                <ActionButton icon={false} padding={"py-3.5 px-8 large:px-10"} />

                <Button classname={"border border-primary text-primary flex items-center gap-2 rounded-full py-3.5 px-4 large:px-6 cursor-pointer text-xs uppercase font-semibold font-headlines group shadow-xl/30 whitespace-nowrap"}>
                    <Span>Learn More</Span>
                    <LuArrowDown size={18} className="group-hover:translate-y-1 duration-500 transition-all" />
                </Button>
            </Flex>

            <Paragraph classname={"text-sm text-primary font-text w-full my-5 large:my-8 middle:my-6 flex items-center justify-center large:justify-start gap-2 px-4"}>
                <Span>
                    {displayed}
                    <span className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-0.5 animate-pulse" />
                </Span>
                <Span classname={`transition-opacity duration-300 ${showIcon ? "opacity-100" : "opacity-0"}`}>
                    <CiDeliveryTruck size={18} />
                </Span>
            </Paragraph>

            <Flex classname={"max-w-md mx-auto large:mx-0 large:max-w-full item-center justify-between large:justify-start gap-8 pt-4"}>
              <div>
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Satisfied Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5★</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Quality Assured</p>
              </div>
            </Flex>
        </Group>
    );
}