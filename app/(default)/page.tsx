export const metadata = {
  title: "Home - Ringconnect",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Accordion from "@/components/accordion";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <BusinessCategories />
    
      <LargeTestimonial />
      <Cta />
    </>
  );
}
