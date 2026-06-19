export default function HowItWorks() {
  const steps = [
    {
      icon: "person_search",
      title: "Tell us about you",
      description: "Share your goals, allergies, and favorite flavors through our intuitive 2-minute wizard.",
    },
    {
      icon: "psychology",
      title: "AI Optimization",
      description: "Our engine analyzes thousands of nutritional data points to craft your perfect meal sequence.",
    },
    {
      icon: "check_circle",
      title: "Start Thriving",
      description: "Receive daily meal plans, shopping lists, and real-time tracking to reach your goals faster.",
    },
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">How it Works</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A simple three-step journey to a healthier you, guided by the world's most advanced dietary AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-outline-variant/50 -z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group z-10">
              <div className="w-24 h-24 rounded-full bg-surface-container-lowest border-4 border-surface shadow-md flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <span 
                  className={`material-symbols-outlined text-4xl ${idx === 0 ? 'text-primary' : idx === 1 ? 'text-secondary' : 'text-primary-container'}`}
                  style={{fontVariationSettings: "'FILL' 1"}}
                >
                  {step.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">{step.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
