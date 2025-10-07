"use client";

export interface ConsultingService {
  title: string;
  description: string;
  color: "orange" | "cyan" | "gold" | "pink" | "teal";
}

type PropType = {
  services: ConsultingService[];
};

const colorVariants = {
  orange: {
    gradient: "from-orange-500/10 to-orange-700/5",
    border: "border-orange-500/30",
    borderHover: "hover:border-orange-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(255,107,0,0.2)]",
    title: "text-orange-500",
    accent: "bg-orange-500",
  },
  cyan: {
    gradient: "from-cyan-500/10 to-cyan-700/5",
    border: "border-cyan-500/30",
    borderHover: "hover:border-cyan-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(0,212,255,0.2)]",
    title: "text-cyan-500",
    accent: "bg-cyan-500",
  },
  gold: {
    gradient: "from-yellow-500/10 to-yellow-700/5",
    border: "border-yellow-500/30",
    borderHover: "hover:border-yellow-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(255,215,0,0.2)]",
    title: "text-yellow-500",
    accent: "bg-yellow-500",
  },
  pink: {
    gradient: "from-pink-500/10 to-pink-700/5",
    border: "border-pink-500/30",
    borderHover: "hover:border-pink-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(236,72,153,0.2)]",
    title: "text-pink-500",
    accent: "bg-pink-500",
  },
  teal: {
    gradient: "from-teal-500/10 to-teal-700/5",
    border: "border-teal-500/30",
    borderHover: "hover:border-teal-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(20,184,166,0.2)]",
    title: "text-teal-500",
    accent: "bg-teal-500",
  },
};

const OneGrid: React.FC<PropType> = ({ services }) => {
  return (
    <section className="relative">
      <div className="flex flex-col gap-6">
        {services.map((service, index) => {
          const colors = colorVariants[service.color];

          return (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${colors.gradient} backdrop-blur-sm border-2 ${colors.border} ${colors.borderHover} rounded-r-2xl px-2 py-4 lg:p-8 transition-all duration-300 ${colors.shadow} hover:-translate-y-2 will-change-transform`}
            >
              {/* Línea de acento lateral */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${colors.accent} transition-all duration-300 group-hover:w-2`}
              />

              {/* Contenido */}
              <div className="pl-4">
                {/* Título */}
                <h3
                  className={`text-2xl lg:text-3xl font-black mb-4 ${colors.title}`}
                >
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OneGrid;
