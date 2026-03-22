import Group from "/src/ui/Group";
import HeaderTexts from "/src/ui/HeaderTexts";

export default function TestimonialsHeader() {
  return (
    <Group classname={"text-center space-y-3 mb-16 lg:mb-20"}>
      <HeaderTexts classname={"text-4xl medium:text-5xl font-headlines font-bold text-foreground"}>
        Trusted by Athletes
      </HeaderTexts>
      <HeaderTexts secondary={true} type="subHeading" classname={""}>
        Real results from real customers
      </HeaderTexts>
    </Group>
  );
}