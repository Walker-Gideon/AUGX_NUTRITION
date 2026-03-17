import Main from "/src/ui/Main";
import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Image from "/src/ui/Image";
import Container from "/src/ui/Container";
import HeroText from "./components/HeroText";

import Img from "/src/assets/img01.jpg";

export default function Hero() {
  return (
    <Container classname={"w-full min-h-screen flex flex-col justify-center"}>
      <Main classname={"w-full px-4 md:px-10 lg:px-16 py-16"}>
        <Flex jsText="between" cText="center" classname={"flex-col middle:flex-row text-center middle:text-left gap-12"}>
          <HeroText />
          <Group>
            <Image source={Img} alternate="Image of Creatine" classname={"medium:w-140 medium:h-110 middle:h-100 w-80 h-80"} />
          </Group>
        </Flex>
      </Main>
    </Container>
  );
}