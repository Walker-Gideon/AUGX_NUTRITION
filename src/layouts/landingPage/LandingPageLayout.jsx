import CTA from "/src/features/cta/CTA";
import Hero from "/src/features/hero/Hero";
import Footer from "/src/features/footer/Footer";
import Products from "/src/features/products/Products";
import Benefits from "/src/features/benefits/Benefits";
import Testimonials from "/src/features/testimonials/Testimonials";

export default function LandingPageLayout() {
  return (
    <div>
      <Hero />
      <Products />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
