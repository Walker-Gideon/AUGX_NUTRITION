import Flex from "/src/ui/Flex";
import Group from "/src/ui/Group";
import Image from "/src/ui/Image";
import Button from "/src/ui/Button";
import Container from "/src/ui/Container";
import HeaderTexts from "/src/ui/HeaderTexts";

import Img from "/src/assets/img01.jpg";

export default function HeroMain() {
    return <Container classname={"w-full bg-green-500 px-36"}>
        <Flex jsText="between" cText="center" classname={"h-full"}>
            <Group>
                <HeaderTexts>
                    Fuel Your Body. Elevate Your Training.
                </HeaderTexts>
                <HeaderTexts secondary={true}>
                    Premium supplements designed to support
                    muscle growth, recovery and performance.
                </HeaderTexts>
                <Button classname={"bg-blue-500"}>Order Today</Button>
            </Group>
            <Group>
                <Image source={Img} alternate="Image of Creatine" classname={"w-50 h-50"} />
            </Group>
        </Flex>
    </Container>;
}