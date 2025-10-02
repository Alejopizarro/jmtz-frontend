import ScrollSection from "./scroll-section";

const AboutMe = ({ index }: { index: number }) => {
  return (
    <ScrollSection
      index={index}
      bgImage="/conference-man.jpg"
      textColor="text-section-gold"
      sectionColor="var(--color-section-gold)"
      buttonVariant="background"
    >
      <h1 className="text-xl lg:text-2xl font-light mb-6 leading-tight">
        About Me – The Global Fan Strategist
      </h1>

      <h2 className="text-4xl lg:text-5xl max-w-3xl font-black mb-8 opacity-80">
        +25 YEARS DRIVING BUSINESS RESULTS THROUGH EMOTIONS
      </h2>

      <p className="text-xl opacity-70 max-w-2xl leading-relaxed">
        I've lived fandom from the inside of the world's most inspiring brands.
      </p>
    </ScrollSection>
  );
};

export default AboutMe;
