import { CiDeliveryTruck } from "react-icons/ci";

import Span from "/src/ui/Span";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";

import { useTypewriter } from "/src/hooks/useTypewriter";

export default function CTA() {
  const { displayed, isDone: showIcon } = useTypewriter({
    text: "Free delivery available",
    typeSpeed: 80,
    eraseSpeed: 40,
    pauseAfter: 1800,
  });

  return (
    <Container section="cta" classname={"bg-primary py-16 md:py-24 text-center px-4 md:px-10 lg:px-16"}>
      <Group classname={"max-w-7xl mx-auto"}>
        <HeaderTexts classname={"text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"}>
          Start Building Muscle Today
        </HeaderTexts>
        <HeaderTexts secondary={true} classname={"text-sm md:text-base text-white/90 mb-10 max-w-2xl md:max-w-full mx-auto"}>
          Premium supplements designed to help you gain size, improve performance, and recover faster.
        </HeaderTexts>
        <Button classname={"bg-white text-primary py-3 px-15 rounded-full whitespace-nowrap font-bold text-lg hover:bg-white/90 cursor-pointer transition-all"}>
          Order Now
        </Button>
        <Paragraph classname={"text-sm text-white/70 mt-4 flex items-center justify-center gap-2"}>
          <Span>
            {displayed}
            <span className="inline-block w-[2px] h-[1em] bg-white align-middle ml-0.5 animate-pulse" />
          </Span>
          <Span classname={`transition-opacity duration-300 ${showIcon ? "opacity-100" : "opacity-0"}`}>
            <CiDeliveryTruck size={18} />
          </Span>
        </Paragraph>
      </Group>
    </Container>
  );
}
