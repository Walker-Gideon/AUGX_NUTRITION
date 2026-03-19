import Group from "/src/ui/Group";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function ProductHeader() {
  return (
    <Group classname={"text-center space-y-3 mb-16 lg:mb-20"}>
      <HeaderTexts classname={"text-4xl lg:text-5xl font-bold text-foreground"}>
        Our Products
      </HeaderTexts>
      <HeaderTexts secondary={true} type="subHeading" classname={"max-w-2xl mx-auto"}>
        Carefully formulated with premium ingredients to support your fitness goals
      </HeaderTexts>
    </Group>
  );
}