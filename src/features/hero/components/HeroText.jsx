import { LuArrowDown } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";

import Flex from "/src/ui/Flex";
import Span from "/src/ui/Span";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";
import ActionButton from "/src/components/ActionButton";

export default function HeroText() {
    return (
        <Group classname={"w-full lg:w-2/3"}>
            <HeaderTexts classname={"text-5xl lg:text-6xl text-primary font-headlines w-full"}>
                <Paragraph>Fuel Your Body.</Paragraph>
                <Paragraph>Elevate Your Training.</Paragraph>
            </HeaderTexts>

            <HeaderTexts secondary={true} classname={"py-6 medium:px-16 text-xl lg:text-2xl text-quaternary font-text w-full"}>
              Premium supplements designed to support
              muscle growth, recovery and performance.
            </HeaderTexts>

            <Flex classname={"items-center justify-center gap-2"}>
                <ActionButton icon={false} padding={"py-3.5 px-8"} />

                <Button classname={"border flex items-center gap-2 rounded-full py-3.5 px-4 cursor-pointer text-xs medium:text-sm uppercase font-semibold font-headlines group shadow-xl/30 whitespace-nowrap"}>
                    <Span>Learn More</Span>
                    <LuArrowDown size={18} className="group-hover:animate-bounce transition-all" />
                </Button>
            </Flex>

            <Paragraph classname={"text-sm text-primary font-text w-full my-5 flex items-center justify-center lg:justify-start gap-2 px-4"}>
                <Span>Free delivery available</Span>
                <CiDeliveryTruck size={18} />
            </Paragraph>
        </Group>
    );
}