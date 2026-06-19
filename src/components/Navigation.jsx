import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-md h-16" 
        : "bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm h-20"
    }`}>
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-[48px] h-full">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
          <span className="font-headline-md text-headline-md font-bold text-primary">NutriPlan</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary transition-colors" href="#dashboard">Dashboard</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#recipes">Recipes</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#progress">Progress</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors px-4">Log In</button>
          <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary-container transition-all active:scale-95">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
