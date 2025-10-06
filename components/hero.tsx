import ScrollSection from "./scroll-section";

const Hero = ({ index }: { index: number }) => {
  return (
    <ScrollSection
      index={index}
      bgImage="/conference.jpg"
      textColor="text-primary"
      sectionColor="var(--color-primary)"
    >
      <h1 className="text-xl lg:text-2xl font-light mb-6 leading-tight">
        Client2Fan, Inc.® by Javier Martinez
      </h1>

      <h2 className="text-4xl uppercase lg:text-5xl font-black mb-8 opacity-80">
        From buyers to believers — turning emotion into exponential growth.
      </h2>

      <p className="text-xl opacity-70 max-w-2xl leading-relaxed">
        The future of business growth is emotional IN ANY INDUSTRY FOR ANY BRAND
        OR PRODUCT—and I&#39;ll show you how to own it!
      </p>
      <button className="hover:scale-105 mt-12 px-12 py-4 bg-primary rounded-full font-bold text-lg text-slate-50 shadow-2xl hover:shadow-3xl transition-all">
        Let’s Talk Growth
      </button>
    </ScrollSection>
  );
};

export default Hero;
