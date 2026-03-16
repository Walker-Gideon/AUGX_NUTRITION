import Main from "/src/ui/Main";
import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Image from "/src/ui/Image";
import Button from "/src/ui/Button";
import Container from "/src/ui/Container";
import HeaderTexts from "/src/ui/HeaderTexts";

import Img from "/src/assets/img01.jpg";

export default function Hero() {
  return (
    <Container classname={"h-screen w-full"}>
      <Main classname={"w-full px-36 absolute inset-0 h-screen"}>
        <Flex jsText="between" cText="center" classname={"h-full"}>
          <Group classname={"w-2/3"}>
            <HeaderTexts classname={"text-6xl font-headlines w-full"}>
              Fuel Your Body. Elevate Your Training.
            </HeaderTexts>
            <HeaderTexts secondary={true}>
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