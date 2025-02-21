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
import HowTo from "@/components/how-to";
import Industry from "@/components/industry";

export default function Home() {
  return (
    <>
      <Hero />
      <HowTo />
      <FeaturesPlanet />
      <Industry />
      {/*  <BusinessCategories /> 
      <LargeTestimonial />*/}
      <Cta />
    </>
  );
}
