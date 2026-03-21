import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import benefits from "/src/data/benefitsData";
import BenefitsHeader from "./components/BenefitsHeader";
import BenefitsDisplay from "./components/BenefitsDisplay";

export default function Benefits() {
  // lg:px-16 md:px-10 lg:py-32 py-20
  return (
    <Container section="benefits" classname={"h-full w-full px-4 md:px-8 bg-background"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BenefitsHeader />
        <Group classname={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}>
          {benefits.map((benefit) => (
            <BenefitsDisplay key={benefit.id} benefit={benefit} />
          ))}
        </Group>
      </div>
    </Container>
  );
}