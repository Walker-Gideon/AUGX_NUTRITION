import Container from "/src/ui/Container";
import Image from "/src/assets/img01.jpg";

export default function HeroMain() {
    return <Container classname={"w-full bg-green-500 px-36"}>
        {/* heading */}
        <h1>Fuel Your Body. Elevate Your Training.</h1>

        {/* subHeading */}
        <h2>Premium supplements designed to support
muscle growth, recovery and performance.</h2>

        {/* image */}
        <img src={Image} alt="" />

        {/* button */}
        <button>Order Today</button>
    </Container>;
}