import Main from "/src/ui/Main";
import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Image from "/src/ui/Image";
import Container from "/src/ui/Container";
import HeroText from "./components/HeroText";

export default function Hero() {
  return (
    <Container section="hero" classname={"relative w-full lg:min-h-screen bg-gradient-to-br from-white via-primary/10 to-primary flex flex-col justify-center"}>
      <Main classname={"w-full px-4 md:px-10 lg:px-16 pt-32 pb-24 md:pt-40 md:pb-32"}>
        <Flex jsText="between" cText="center" classname={"flex-col large:flex-row text-center large:text-left gap-12"}>
          <HeroText />
          <Group classname={"w-full large:w-auto flex-shrink-0"}>
            {/* <Image source={Img} alternate="Image of Creatine" classname={"medium:w-140 medium:h-110 middle:h-100 w-80 h-80"} /> */}
            <Group classname={"border w-full h-74 large:w-90 large:h-100 lg:w-120 rounded-xl"}></Group>
          </Group>
        </Flex>
      </Main>
    </Container>
  );
}