import Flex from "/src/ui/Flex";
import Span from "/src/ui/Span";
import Group from "/src/ui/Group";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function TestimonialsDisplay({ testimonial }) {
  return (
    <Card type="cards" classname={"p-6 lg:p-8 space-y-4 shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-500 cursor-default"}>
      <Flex classname={"gap-1 mb-4"}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Span key={i} classname={"text-yellow-500 text-sm md:text-lg"}>★</Span>
        ))}
      </Flex>

      <Paragraph classname={"text-text text-sm mb-6 leading-relaxed italic"}>
        "{testimonial.content}"
      </Paragraph>

      <Group classname={"space-y-1"}>
        <HeaderTexts classname={"font-semibold"}>
          {testimonial.name}
        </HeaderTexts>
        <Paragraph classname={"text-sm text-quaternary"}>
          {testimonial.role}
        </Paragraph>
      </Group>
    </Card>
  );
}
