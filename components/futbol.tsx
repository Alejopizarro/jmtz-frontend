import ScrollSection from "./scroll-section";

const Futbol = ({ index }: { index: number }) => {
  return (
    <ScrollSection
      index={index}
      bgImage="/conference-man.jpg"
      textColor="text-section-pink"
      sectionColor="var(--color-section-pink)"
    >
      <h2 className="text-2xl lg:text-4xl font-extralight mb-6 leading-tight">
        At Atletico de Madrid and Manchester City
      </h2>

      <p className="text-4xl lg:text-6xl uppercase max-w-3xl mb-6 tracking-tight leading-none">
        I experienced how{" "}
        <span className="font-black">fans fuel entire business models.</span>
      </p>
      <p className="text-xl opacity-70 max-w-2xl leading-relaxed">
        Drove +400% sponsorship growth at Atlético, designed Wanda Metropolitano
        fan experience, and advised Manchester City on global expansion
        strategies.
      </p>
    </ScrollSection>
  );
};

export default Futbol;
