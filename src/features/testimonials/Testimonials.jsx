import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import testimonials from "/src/data/testimonialsData";
import TestimonialsHeader from "./components/TestimonialsHeader";
import TestimonialsDisplay from "./components/TestimonialsDisplay";

export default function Testimonials() {
  return (
    <Container section="testimonials" classname={"h-full w-full px-4 md:px-10 lg:px-16 py-15 md:py-20 lg:py-32 bg-primary/5"}>
      {/* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
      <div className="">
        <TestimonialsHeader />
        {/*  */}
        <Group classname={"grid md:grid-cols-3 gap-8 lg:gap-10 lg:max-w-4xl lg:mx-auto"}>
          {testimonials.map((testimonial, idx) => (
            <TestimonialsDisplay key={idx} testimonial={testimonial} />
          ))}
        </Group>
      </div>
    </Container>
  );
}