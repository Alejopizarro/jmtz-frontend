import ScrollSection from "./scroll-section";

const Services = ({ index }: { index: number }) => {
  return (
    <ScrollSection
      index={index}
      bgImage="/conference.jpg"
      textColor="text-background"
      sectionColor="var(--color-background)"
    >
      <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
        Excepteur Sint Occaecat
      </h1>

      <h2 className="text-3xl lg:text-5xl font-bold mb-8 opacity-80">
        Cupidatat non proident
      </h2>

      <p className="text-xl lg:text-2xl opacity-70 max-w-2xl leading-relaxed">
        Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
        perspiciatis unde omnis iste natus error sit voluptatem accusantium.
      </p>
    </ScrollSection>
  );
};

export default Services;
