import ScrollSection from "./scroll-section";

const ArabiaSaudi = ({ index }: { index: number }) => {
  return (
    <ScrollSection
      index={index}
      bgImage="/conference.jpg"
      textColor="text-section-teal"
      sectionColor="var(--color-section-teal)"
    >
      <h2 className="text-2xl lg:text-4xl font-light mb-6 leading-tight">
        In Saudi Arabia
      </h2>

      <p className="text-4xl lg:text-6xl max-w-4xl mb-6 italic opacity-80">
        I witnessed how{" "}
        <span className="font-black">sports can transform a nation</span>
      </p>
      <p className="text-xl opacity-70 max-w-2xl leading-relaxed">
        Led sponsorship and corporate partnerships for Qiddiya—Saudi
        Arabia&#39;s mega entertainment destination—shaping the nation&#39;s
        Vision 2030 transformation.
      </p>
    </ScrollSection>
  );
};

export default ArabiaSaudi;
