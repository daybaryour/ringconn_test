export const metadata = {
  title: "Home - Ringconnect",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import Cta from "@/components/cta";
import HowTo from "@/components/how-to";

export default function Home() {
  return (
    <>
      <Hero />
      <HowTo />
      <FeaturesPlanet />
      <Cta />
    </>
  );
}
