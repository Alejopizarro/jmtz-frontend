import ScrollSection from "./scroll-section";

const Portfolio = ({ index }: { index: number }) => {
  return (
    <ScrollSection
      index={index}
      bgImage="/conference-man.jpg"
      textColor="text-background"
      buttonVariant="background"
    >
      <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
        Nemo Enim Ipsam
      </h1>

      <h2 className="text-3xl lg:text-5xl font-bold mb-8 opacity-80">
        Voluptatem quia voluptas
      </h2>

      <p className="text-xl lg:text-2xl opacity-70 max-w-2xl leading-relaxed">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt.
      </p>
    </ScrollSection>
  );
};

export default Portfolio;
