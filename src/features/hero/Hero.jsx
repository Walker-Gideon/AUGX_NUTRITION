import Container from "/src/ui/Container";
import HeroMain from "./components/HeroMain";

export default function Hero() {
  return (
    <Container classname={"h-screen w-full bg-red-500"}>
      <HeroMain />
    </Container>
  );
}