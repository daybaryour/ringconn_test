"use client";
import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import Cta from "@/components/cta";
import HowTo from "@/components/how-to";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <HowTo />
      <Cta />
    </>
  );
}
