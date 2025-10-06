"use client";
import Carousel from "./ui/carousel";
import { Target, Layers, TrendingUp, DollarSign, Users } from "lucide-react";
import { MethodologyStep } from "./ui/carousel";

const methodologySteps: MethodologyStep[] = [
  {
    title: "Engage",
    description: "Purpose & storytelling.",
    icon: Target,
  },
  {
    title: "Embed",
    description: "Integration into daily life.",
    icon: Layers,
  },
  {
    title: "Elevate",
    description: "Customers → Fans.",
    icon: TrendingUp,
  },
  {
    title: "Enable",
    description: "Monetization of emotion.",
    icon: DollarSign,
  },
  {
    title: "Extend",
    description: "Advocacy & communities.",
    icon: Users,
  },
];

const Methodology = () => {
  return (
    <section className="bg-background py-20 px-8 lg:py-32">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text">
        <h2 className="text-2xl lg:text-4xl font-light mb-4">
          Our Methodology
        </h2>
        <p className="text-4xl lg:text-6xl mb-16">
          E-Motion Conversion&reg;{" "}
          <span className="font-black">Moving Emotion Into Action</span>
        </p>
        <Carousel steps={methodologySteps} />
      </div>
    </section>
  );
};

export default Methodology;
