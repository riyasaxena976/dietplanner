import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation({ onOpenDietModal }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-md h-16" 
          : "bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm h-20"
      }`}>
        <div className="max-w-[1280px] mx-auto px-[48px] h-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-headline-md text-headline-md font-bold text-primary">NutriPlan</span>
          </Link>
          
          <div className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className={`font-body-md text-body-md transition-colors ${isActive('/') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/recipes" 
              className={`font-body-md text-body-md transition-colors ${isActive('/recipes') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Recipes
            </Link>
            <Link 
              to="/progress" 
              className={`font-body-md text-body-md transition-colors ${isActive('/progress') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Progress
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-md">search</span>
              <input 
                className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-primary/20 text-label-md font-label-md outline-none" 
                placeholder="Search healthy recipes..." 
                type="text"
              />
            </div>
            <button 
              onClick={onOpenDietModal}
              className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md font-bold hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-low border-t border-outline-variant/20 z-40 p-[8px] flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-primary' : 'text-on-surface-variant'}`}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </Link>
        <Link to="/recipes" className={`flex flex-col items-center gap-1 ${isActive('/recipes') ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
          <span className="material-symbols-outlined" style={{fontVariationSettings: isActive('/recipes') ? "'FILL' 1" : "'FILL' 0"}}>restaurant</span>
          <span className="font-label-sm text-label-sm">Meals</span>
        </Link>
        <Link to="/progress" className={`flex flex-col items-center gap-1 ${isActive('/progress') ? 'text-primary' : 'text-on-surface-variant'}`}>
          <span className="material-symbols-outlined">insights</span>
          <span className="font-label-sm text-label-sm">Insights</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-sm text-label-sm">Settings</span>
        </button>
      </div>
    </>
  );
}
