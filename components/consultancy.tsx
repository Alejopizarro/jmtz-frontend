import OneGrid, { ConsultingService } from "./ui/one-grid";

const consultingServices: ConsultingService[] = [
  {
    title: "Current Fandom Assessment",
    description:
      "Comprehensive evaluation of your customers' emotional connection levels. We identify gaps and opportunities to build authentic advocacy.",
    color: "cyan",
  },
  {
    title: "Fan Journey Design",
    description:
      "Strategic mapping of your customers' emotional journey—from awareness to brand ambassadors. Seamlessly integrated physical and digital touchpoints.",
    color: "orange",
  },
  {
    title: "Emotional Monetization Models",
    description:
      "Strategies to transform brand love into sustainable revenue. Emotional pricing, membership programs, and community-driven products.",
    color: "gold",
  },
  {
    title: "Community Strategy (B2B & B2C)",
    description:
      "Building advocacy and brand ambassadors. Design of community programs that drive organic growth.",
    color: "pink",
  },
];

const Consultancy = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 lg:py-26 px-4 flex flex-col sm:flex-row gap-8">
      <div className="flex flex-col max-w-xl space-y-4 text-slate-50">
        <h2 className="opacity-80 font-sans font-light text-xl lg:text-2xl">
          Strategic Consulting for Long-Term Transformation
        </h2>
        <p className="font-serif font-black text-5xl lg:text-7xl">
          Turn your business into a fan-generating machine
        </p>
        <p className="opacity-80 ">
          Beyond workshops and speaking, Javier partners with organizations for
          deep strategic transformation. From diagnosis to execution, we build
          fan-driven business models that deliver sustainable growth.
        </p>
        <button className="hover:scale-105 bg-primary rounded-full font-bold text-lg text-slate-50 shadow-2xl hover:shadow-3xl transition-all w-fit py-4 px-8">
          Read more
        </button>
      </div>
      <OneGrid services={consultingServices} />
    </div>
  );
};

export default Consultancy;
