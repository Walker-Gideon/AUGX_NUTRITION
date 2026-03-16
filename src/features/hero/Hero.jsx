import Main from "/src/ui/Main";
import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Image from "/src/ui/Image";
import Button from "/src/ui/Button";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import HeaderTexts from "/src/ui/HeaderTexts";

import Img from "/src/assets/img01.jpg";

export default function Hero() {
  return (
    <Container classname={"h-screen w-full"}>
      <Main classname={"w-full lg:px-36 px-4 py-24 absolute inset-0 h-screen"}>
        <Flex jsText="between" cText="center"  classname={"h-full flex-col text-center"}>
          <Group classname={"w-full lg:w-2/3"}>
            <HeaderTexts classname={"text-5xl lg:text-6xl text-primary font-headlines w-full"}>
                <Paragraph>
                    Fuel Your Body.
                </Paragraph>
                <Paragraph>
                    Elevate Your Training.
                </Paragraph>
            </HeaderTexts>
            <HeaderTexts secondary={true} classname={"px-2 py-6 text-xl lg:text-2xl text-quaternary font-text w-full"}>
              Premium supplements designed to support
              muscle growth, recovery and performance.
            </HeaderTexts>
            <Button classname={"bg-blue-500"}>
              Order Now
            </Button>
          </Group>
          <Group>
            <Image source={Img} alternate="Image of Creatine" classname={"w-50 h-50"} />
          </Group>
        </Flex>
      </Main>
    </Container>
  );
}