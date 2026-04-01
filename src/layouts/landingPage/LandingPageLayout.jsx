import { lazy, Suspense } from "react";

import Hero from "/src/features/hero/Hero";
import MainHeader from "/src/components/MainHeader";
import Products from "/src/features/products/Products";

// Lazy load sections below the fold
const CTA = lazy(() => import("/src/features/cta/CTA"));
const Footer = lazy(() => import("/src/features/footer/Footer"));
const Benefits = lazy(() => import("/src/features/benefits/Benefits"));
const Testimonials = lazy(() => import("/src/features/testimonials/Testimonials"));

export default function LandingPageLayout() {
  return (
    <>
      <MainHeader />
      <Hero />
      <Products />
      
      <Suspense fallback={null}>
        <Benefits />
        <Testimonials />
        <CTA />
        <Footer />
      </Suspense>
    </>
  );
}


//*  run this "npx formspree deploy" using the email [EMAIL_ADDRESS] in the formspree.json file
