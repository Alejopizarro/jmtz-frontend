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
    <section className="bg-background py-12 px- lg:py-26">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text">
        <h2 className="text-2xl lg:text-4xl font-light mb-4">
          Our Methodology
        </h2>
        <p className="text-4xl lg:text-6xl mb-4">
          E-Motion Conversion&reg;{" "}
          <span className="font-black">Moving Emotion Into Action</span>
        </p>
        <p className="text-lg lg:text-xl mb-6 text-slate-300">
          A seamless engine designed to transform brand emotion into measurable
          action—empowering your business to inspire, engage, and convert
          audiences at every step.
        </p>
        <Carousel steps={methodologySteps} />
      </div>
    </section>
  );
};

export default Methodology;
