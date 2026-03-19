import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function Products() {
  return (
    <Container section="products" classname={"h-full w-full py-20 lg:py-32 bg-white"}>
      <Group classname={"max-w-7xl mx-auto px-4 md:px-6 lg:px-8"}>
        {/* Header */}
        <Group classname={"text-center space-y-3 mb-16 lg:mb-20"}>
          <HeaderTexts classname={"text-4xl lg:text-5xl font-bold text-foreground"}>
            Our Products
          </HeaderTexts>
          <HeaderTexts secondary={true} type="subHeading" classname={"max-w-2xl mx-auto"}>
            Carefully formulated with premium ingredients to support your fitness goals
          </HeaderTexts>
        </Group>

        {/* Product Grid */}
        <Group>
          
        </Group>
      </Group>
    </Container>
  );
}