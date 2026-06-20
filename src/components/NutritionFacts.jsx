export default function NutritionFacts() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-md text-headline-md text-on-surface">Nutrition Facts</h2>
        <a className="text-primary font-label-md text-label-md hover:underline" href="#nutrition">
          View all
        </a>
      </div>
      <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary p-2 rounded-lg text-on-primary">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <span className="font-headline-md text-headline-md text-primary">Did you know?</span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
            "A single medium avocado contains more potassium than a large banana, helping regulate blood pressure and
            muscle function while providing healthy monounsaturated fats."
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/80">
              <span className="block text-label-sm font-label-sm text-on-surface-variant uppercase">Potassium</span>
              <span className="block text-headline-md font-bold text-primary">485mg</span>
            </div>
            <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/80">
              <span className="block text-label-sm font-label-sm text-on-surface-variant uppercase">Healthy Fats</span>
              <span className="block text-headline-md font-bold text-primary">15g</span>
            </div>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute -right-10 -bottom-10 opacity-10">
          <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'wght' 700" }}>
            nutrition
          </span>
        </div>
      </div>
    </div>
  );
}
