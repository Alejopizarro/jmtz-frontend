"use client";

export interface WorkshopCard {
  title: string;
  description: string;
  bullets: string[];
  color: "orange" | "cyan" | "gold" | "pink" | "teal";
}

type PropType = {
  cards: WorkshopCard[];
};

const colorVariants = {
  orange: {
    gradient: "from-orange-500/10 to-orange-700/5",
    border: "border-orange-500/30",
    borderHover: "hover:border-orange-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(255,107,0,0.2)]",
    title: "text-orange-500",
    bullet: "bg-orange-500/20 text-orange-500 border-orange-500/30",
  },
  cyan: {
    gradient: "from-cyan-500/10 to-cyan-700/5",
    border: "border-cyan-500/30",
    borderHover: "hover:border-cyan-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(0,212,255,0.2)]",
    title: "text-cyan-500",
    bullet: "bg-cyan-500/20 text-cyan-500 border-cyan-500/30",
  },
  gold: {
    gradient: "from-yellow-500/10 to-yellow-700/5",
    border: "border-yellow-500/30",
    borderHover: "hover:border-yellow-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(255,215,0,0.2)]",
    title: "text-yellow-500",
    bullet: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
  },
  pink: {
    gradient: "from-pink-500/10 to-pink-700/5",
    border: "border-pink-500/30",
    borderHover: "hover:border-pink-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(236,72,153,0.2)]",
    title: "text-pink-500",
    bullet: "bg-pink-500/20 text-pink-500 border-pink-500/30",
  },
  teal: {
    gradient: "from-teal-500/10 to-teal-700/5",
    border: "border-teal-500/30",
    borderHover: "hover:border-teal-500/60",
    shadow: "hover:shadow-[0_12px_48px_rgba(20,184,166,0.2)]",
    title: "text-teal-500",
    bullet: "bg-teal-500/20 text-teal-500 border-teal-500/30",
  },
};

const ThreeGrid: React.FC<PropType> = ({ cards }) => {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => {
          const colors = colorVariants[card.color];

          return (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${colors.gradient} backdrop-blur-sm border-2 ${colors.border} ${colors.borderHover} rounded-2xl p-6 lg:p-8 transition-all duration-300 ${colors.shadow} hover:-translate-y-2 will-change-transform`}
            >
              {/* Contenido */}
              <div className="flex flex-col h-full">
                {/* Título */}
                <h3
                  className={`text-2xl lg:text-3xl font-black mb-4 ${colors.title}`}
                >
                  {card.title}
                </h3>

                {/* Descripción */}
                <p className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* Bullets (especificaciones) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.bullets.map((bullet, bulletIndex) => (
                    <span
                      key={bulletIndex}
                      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full border ${colors.bullet} transition-transform duration-200 hover:scale-105`}
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ThreeGrid;
