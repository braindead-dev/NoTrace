"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <div className="w-full">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </div>
    </main>
  );
}