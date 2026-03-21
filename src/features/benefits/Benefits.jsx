import Container from "/src/ui/Container";
import benefits from "/src/data/benefitsData";
import BenefitsHeader from "./components/BenefitsHeader";

export default function Benefits() {
  // lg:px-16 md:px-10 lg:py-32 py-20
  return (
    <Container section="benefits" classname={"h-full w-full px-4 md:px-8 bg-background"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BenefitsHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}