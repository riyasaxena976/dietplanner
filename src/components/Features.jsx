export default function Features() {
  return (
    <section className="py-24">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-label-md uppercase tracking-wider">The NutriPlan Advantage</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">Unparalleled AI Precision</h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-sm">
            Built on peer-reviewed nutritional science and advanced machine learning algorithms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-[24px] h-auto lg:h-[600px]">
          {/* Main Feature */}
          <div className="md:col-span-2 md:row-span-2 bg-primary-container/10 rounded-3xl p-10 bento-item flex flex-col justify-between overflow-hidden relative border border-primary-fixed-dim/20">
            <div className="z-10">
              <h3 className="font-display-lg text-headline-lg text-on-primary-container mb-4">Adaptive Meal Logic</h3>
              <p className="font-body-lg text-on-surface-variant max-w-md">
                Our AI doesn't just plan; it learns. If you skip a meal or have a cheat day, NutriPlan automatically recalibrates your next 48 hours to keep you on target.
              </p>
            </div>
            <div className="mt-8 flex gap-4 overflow-hidden z-10">
              <div className="bg-surface p-4 rounded-2xl shadow-sm min-w-[200px]">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-sm text-primary">Dynamic Recalibration</span>
                  <span className="material-symbols-outlined text-primary text-sm">refresh</span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[40%]"></div>
                  </div>
                  <div className="h-2 w-[80%] bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[60%]"></div>
                  </div>
                  <div className="h-2 w-[90%] bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[30%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-surface-container-high rounded-3xl p-8 bento-item flex flex-col gap-4 border border-outline-variant/30">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white">biotech</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface">Bio-Feedback Ready</h4>
            <p className="font-body-md text-on-surface-variant">
              Sync with Apple Health, Google Fit, or your smart scale for real-time biological data integration.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-surface-container-high rounded-3xl p-8 bento-item flex flex-col gap-4 border border-outline-variant/30">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white">shopping_cart</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface">Smart Cart</h4>
            <p className="font-body-md text-on-surface-variant">
              One-tap grocery ordering from your plan. We optimize for what you already have in your pantry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
