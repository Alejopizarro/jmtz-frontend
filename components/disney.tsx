import ScrollSection from "./scroll-section";

const Disney = ({ index }: { index: number }) => {
  return (
    <ScrollSection
      index={index}
      bgImage="/conference.jpg"
      textColor="text-section-orange"
      sectionColor="var(--color-section-orange)"
    >
      <h2 className="text-2xl lg:text-4xl font-light mb-6 leading-tight">
        At Disney
      </h2>

      <p className="text-4xl lg:text-5xl uppercase font-black max-w-3xl mb-6 tracking-tight leading-none">
        I saw how <span className="font-black">storytelling</span> creates{" "}
        <span className="font-black">love</span> that lasts a lifetime that{" "}
        <span className="font-black">boost organic business growth.</span>
      </p>
      <p className="text-xl opacity-70 max-w-2xl leading-relaxed">
        Led €650M+ revenue strategy across Parks & Resorts, consolidating Disney
        as #1 brand through strategic partnerships and integrated experiences.
      </p>
    </ScrollSection>
  );
};

export default Disney;
