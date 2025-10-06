/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { LucideIcon } from "lucide-react";

export interface MethodologyStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

type PropType = {
  steps: MethodologyStep[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { steps, options } = props;

  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true, // Se pausa al pasar el mouse
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: true,
      align: "start",
    },
    [autoplay]
  );

  const onMouseEnter = useCallback(() => {
    autoplay.stop();
  }, [autoplay]);

  const onMouseLeave = useCallback(() => {
    autoplay.play();
  }, [autoplay]);

  return (
    <section className="embla">
      <div className="embla__viewport py-12" ref={emblaRef}>
        <div className="embla__container">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="embla__slide" key={index}>
                <div
                  className="embla__slide__card items-center text-center"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <div className="mb-6">
                    <Icon
                      size={82}
                      className="text-primary"
                      strokeWidth={0.8}
                    />
                  </div>
                  <h3 className="text-3xl text-foreground/80 lg:text-4xl font-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-foreground/80">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
