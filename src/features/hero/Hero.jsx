import { LuArrowDown } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";

import Main from "/src/ui/Main";
import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Image from "/src/ui/Image";
import Button from "/src/ui/Button";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import HeaderTexts from "/src/ui/HeaderTexts";
import ActionButton from "/src/components/ActionButton";

import Img from "/src/assets/img01.jpg";

export default function Hero() {
  return (
    <Container classname={"w-full min-h-screen flex flex-col justify-center"}>
      <Main classname={"w-full px-4 py-16 lg:px-36"}>
        <Flex jsText="between" cText="center" classname={"flex-col middle:flex-row text-center gap-12"}>
          <Group classname={"w-full lg:w-2/3"}>
            <HeaderTexts classname={"text-5xl lg:text-6xl text-primary font-headlines w-full"}>
                <Paragraph>
                    Fuel Your Body.
                </Paragraph>
                <Paragraph>
                    Elevate Your Training.
                </Paragraph>
            </HeaderTexts>
            <HeaderTexts secondary={true} classname={"py-6 medium:px-16 text-xl lg:text-2xl text-quaternary font-text w-full"}>
              Premium supplements designed to support
              muscle growth, recovery and performance.
            </HeaderTexts>
            <Flex classname={"items-center justify-center gap-2"}>
                <ActionButton icon={false} padding={"py-3 px-8"} />
                <Button classname={"border flex items-center gap-2 rounded-full py-3 px-4 cursor-pointer medium:text-sm font-headlines group shadow-xl/30 whitespace-nowrap"}>
                    Learn More
                    <LuArrowDown size={18} className=" group-hover:animate-bounce transition-all" />
                </Button>
            </Flex>
            <Paragraph classname={"text-sm text-primary font-text w-full my-5 flex items-center justify-center lg:justify-start gap-2 px-4"}>
                Free delivery available
                <CiDeliveryTruck size={18} className="" />
            </Paragraph>
          </Group>
          <Group>
            <Image source={Img} alternate="Image of Creatine" classname={"medium:w-140 medium:h-110 w-80 h-80"} />
          </Group>
        </Flex>
      </Main>
    </Container>
  );
}