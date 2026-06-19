export default function CTA({ onGetStarted }) {
  return (
    <section className="py-24 px-[20px]">
      <div className="max-w-[1280px] mx-auto bg-primary rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center text-on-primary">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="relative z-10">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">Ready to reach your goals?</h2>
          <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of others who have transformed their lives through the power of personalized AI nutrition. Your first plan is just 2 minutes away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onGetStarted}
              className="bg-white text-primary font-headline-md text-headline-md px-10 py-5 rounded-2xl hover:bg-primary-fixed-dim transition-all shadow-xl"
            >
              Get Started for Free
            </button>
            <button className="bg-primary-container text-white font-headline-md text-headline-md px-10 py-5 rounded-2xl border border-white/20 hover:bg-white/10 transition-all">
              Speak to an Expert
            </button>
          </div>
          <p className="mt-8 font-label-sm text-label-sm text-white/60">No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
}
