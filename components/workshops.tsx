"use client";

import ThreeGrid, { WorkshopCard } from "./ui/three-grid";

const workshopCards: WorkshopCard[] = [
  {
    title: "From Clients to Fans",
    description:
      "Aprende a crear conexiones emocionales que impulsan el crecimiento orgánico. Framework FanX Canvas + Emotional Loop Toolkit incluidos.",
    bullets: ["Presencial", "Media jornada", "FanX Canvas", "Toolkit"],
    color: "orange",
  },
  {
    title: "Phygital: The New Real",
    description:
      "Integra experiencias físicas y digitales para engagement total. Mapping de customer journeys físico-digitales.",
    bullets: ["Presencial", "Jornada completa", "Customer Journey"],
    color: "cyan",
  },
  {
    title: "Fan-Driven Growth",
    description:
      "Casos reales y frameworks aplicables desde el día 1. Incluye plan de acción personalizado para tu organización.",
    bullets: ["Virtual", "Media jornada", "Plan de acción", "Casos reales"],
    color: "gold",
  },
];

const Workshops = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-26 sm:text-center flex flex-col sm:items-center">
      <h2 className="text-5xl lg:text-7xl font-black mb-4 bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text">
        Workshops
      </h2>
      <p className="text-lg lg:text-xl mb-8 lg:mb-12 text-slate-300">
        Hands-On Workshops for Immediate Impact. Based on the E-Motion
        Conversion® Method.
      </p>
      <ThreeGrid cards={workshopCards} />
      <button className="mt-8  lg:mt-12 hover:scale-105 bg-primary rounded-full font-bold text-lg text-slate-50 shadow-2xl hover:shadow-3xl transition-all w-fit py-4 px-8">
        Read more
      </button>
    </div>
  );
};

export default Workshops;
