"use client";

import Link from "next/link";
import { Home, Mail, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeColor, setActiveColor] = useState("var(--color-primary)");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section-color]");
      const scrollPosition = window.scrollY + 100; // Offset para el navbar

      let currentSection = sections[0]; // Default a la primera sección

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        // Si el scroll está dentro de esta sección
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section;
        }
      });

      const color = currentSection.getAttribute("data-section-color");
      if (color) {
        setActiveColor(color);
      }
    };

    // Llamar inmediatamente para establecer el color inicial
    handleScroll();

    // Agregar el listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="fixed z-[1004] text-slate-100 border-y-2 border-slate-100 flex justify-between items-center top-0 left-0 w-full backdrop-blur-md transition-colors duration-300"
      style={{
        backgroundColor: `${activeColor}`,
      }}
    >
      <Link
        href="/"
        className="block border-r-2 border-slate-100 px-4 py-2 text-lg font-semibold hover:text-white hover:brightness-110 transition-all"
      >
        <Home size={28} />
      </Link>
      <div className="hidden sm:flex uppercase items-center">
        <Link
          href="#speaker"
          className="block px-4 py-2 text-lg border-x-2 border-slate-100 font-semibold hover:text-white hover:brightness-110 transition-all"
        >
          Speaker
        </Link>
        <Link
          href="#workshops"
          className="block px-4 py-2 text-lg font-semibold hover:text-white hover:brightness-110 transition-all"
        >
          Workshops
        </Link>
        <Link
          href="#consultancy"
          className="block px-4 py-2 border-x-2 border-slate-100 text-lg font-semibold hover:text-white hover:brightness-110 transition-all"
        >
          Consultancy Service
        </Link>
      </div>
      <Link
        href="#contact"
        className="block px-4 py-2 text-lg border-l-2 border-slate-100 font-semibold hover:text-white hover:brightness-110 transition-all"
      >
        <Mail size={28} className="hidden sm:flex" />
        <Menu size={28} className="sm:hidden" />
      </Link>
    </nav>
  );
};

export default Navbar;
