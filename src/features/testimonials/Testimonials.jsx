import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import testimonials from "/src/data/testimonialsData";
import TestimonialsHeader from "./components/TestimonialsHeader";

export default function Testimonials() {
  return (
    <Container section="testimonials" classname={"h-full w-full px-4 md:px-10 lg:px-16 py-15 md:py-20 lg:py-32 bg-primary/5"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsHeader />

        {/* Testimonials Grid */}
        <Group classname={"grid md:grid-cols-3 gap-8 lg:gap-10"}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card border-border p-8 lg:p-10">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </Group>
      </div>
    </Container>
  );
}