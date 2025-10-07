import AboutMe from "@/components/about-me";
import ArabiaSaudi from "@/components/arabia-saudi";
import Consultancy from "@/components/consultancy";
import Cta from "@/components/cta";
import Differential from "@/components/differential";
import Disney from "@/components/disney";
import Futbol from "@/components/futbol";
import Hero from "@/components/hero";
import Methodology from "@/components/methodology";
import Speaker from "@/components/speaker";
import Workshops from "@/components/workshops";

const Page = () => {
  return (
    <>
      {/* Contenedor de secciones sticky */}
      <div className="relative">
        <Hero index={0} />
        <AboutMe index={1} />
        <Disney index={2} />
        <Futbol index={3} />
        <ArabiaSaudi index={4} />
      </div>

      {/* Contenido normal después de las secciones sticky */}
      <div className="relative z-[1003] bg-background">
        <Differential />
        <Methodology />
        <Speaker />
        <Workshops />
        <Consultancy />
        <Cta />
      </div>
    </>
  );
};

export default Page;
