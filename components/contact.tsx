import ScrollSection from "./scroll-section";

const Contact = ({ index }: { index: number }) => {
  return (
    <ScrollSection
      index={index}
      bgImage="/conference.jpg"
      textColor="text-foreground"
      sectionColor="var(--color-foreground)"
    >
      <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
        Ut Labore Et Dolore
      </h1>

      <h2 className="text-3xl lg:text-5xl font-bold mb-8 opacity-80">
        Magnam aliquam quaerat
      </h2>

      <p className="text-xl lg:text-2xl opacity-70 max-w-2xl leading-relaxed">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
      </p>
    </ScrollSection>
  );
};

export default Contact;
