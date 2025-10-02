import AboutMe from "@/components/about-me";
import ArabiaSaudi from "@/components/arabia-saudi";
import Disney from "@/components/disney";
import Futbol from "@/components/futbol";
import Hero from "@/components/hero";

const Page = () => {
  return (
    <div className="relative">
      <Hero index={0} />
      <AboutMe index={1} />
      <Disney index={2} />
      <Futbol index={3} />
      <ArabiaSaudi index={4} />
    </div>
  );
};

export default Page;
