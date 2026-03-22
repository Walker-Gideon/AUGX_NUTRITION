import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import benefits from "/src/data/benefitsData";
import BenefitsHeader from "./components/BenefitsHeader";
import BenefitsDisplay from "./components/BenefitsDisplay";

export default function Benefits() {
  return (
    <Container section="benefits" classname={"h-full w-full px-4 md:px-10 lg:px-16 py-15 md:py-20 lg:py-32 bg-primary/20"}>
      <BenefitsHeader />
      <Group classname={"grid middle:grid-cols-5 gap-4"}>
        {benefits.map((benefit) => (
          <BenefitsDisplay key={benefit.id} benefit={benefit} colSpan={benefit.colSpan} />
        ))}
      </Group>
    </Container>
  );
}