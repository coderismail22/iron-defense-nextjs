"use client";
import SmoothScrolling from "@/components/utils/SmoothScrolling";
import { AccordionDemo } from "@/components/main/AccordionDemo";
import PackagesTabs from "@/components/main/PackagesTabs";
export default function Home() {
  return (
    <div className="h-full w-full">
      <SmoothScrolling />

      {/* Tabs for Pricing and Packages */}
      <PackagesTabs />
      {/* "Accordion for FAQ" */}
      <AccordionDemo />
    </div>
  );
}
