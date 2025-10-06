"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollSectionProps {
  index: number;
  bgImage: string;
  textColor: string;
  sectionColor: string;
  children: ReactNode;
}

const ScrollSection = ({
  index,
  bgImage,
  textColor,
  sectionColor,
  children,
}: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      data-section-color={sectionColor}
      style={{
        scale,
        opacity,
        position: "sticky",
        top: `${index * 20}px`,
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Overlay negro con transparencia */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-12 lg:py-32 flex flex-col justify-center min-h-screen relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className={textColor}>{children}</div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-current opacity-5" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-current opacity-5" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-current opacity-5" />
      </div>
    </motion.div>
  );
};

export default ScrollSection;
