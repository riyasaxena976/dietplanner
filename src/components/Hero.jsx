export default function Hero({ onCreatePlan }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10"></div>
      <div className="max-w-[1280px] mx-auto px-[48px] grid grid-cols-1 lg:grid-cols-2 gap-[24px] items-center">
        <div className="space-y-[32px] z-10">
          <div className="inline-flex items-center gap-2 bg-primary-fixed/30 text-on-primary-fixed-variant px-4 py-1.5 rounded-full border border-primary-fixed-dim/50">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            <span className="font-label-sm text-label-sm">Next-Gen AI Nutrition Engine</span>
          </div>
          <h1 className="font-display-lg text-display-lg md:text-[56px] leading-tight text-on-surface">
            Your Personalized Diet Plan <br className="hidden md:block" /> <span className="text-primary">Powered by AI</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Transform your health with customized meal plans tailored to your body, goals, and unique dietary preferences. AI precision meets culinary excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onCreatePlan}
              className="bg-primary text-on-primary font-headline-md text-body-md px-8 py-4 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Create My Diet Plan
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="bg-surface-container-high text-on-surface font-headline-md text-body-md px-8 py-4 rounded-xl border border-outline-variant hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2">
              Explore Healthy Tips
            </button>
          </div>
          <div className="flex items-center gap-[16px] pt-8">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6jtUYD68Apyh_BwOzu9BEIafQP0UkqzgVhSDLRwtpNSdwSbxRq_z3pNiKIBJqxo_OIWiu-Bc23o9W26nVdWNT7mQLlNhZWC_RhP9Wd5LubH3Fayj45ig2RxLE5fV-YW9nhMnnKlQn4eP5smcgBylC1XD-beptwx1kdByvYAXYOC7SgJgHY4CkBgwK5IGkxYMxLA05xRDvHW7r0JM7T6oTlbv0_-pNioKzgEjyxbzEyTRTkVZMymZGJKj8RMfYm8rIwYQpC3CZZN-R" />
              <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZXqS6JfVjdz6nV5Bn0BCP9KbL10pq5sEz2xk4Vjd6xIKt2ZwG0lzGTdu7evyx9LPq8Ecc97_KvDYSbyGzKu0jzRovFBKCskdQxlWV7Xy3F29jYScfLn52Qy9smYhCtaPdwevFdCSt8hITYn8dQEyJVeDC5lh0gmcBdvdMBxmdgmNR9waoNqB9Xr5lH_Pqe7ZH9eL9zJ6T7NTVa-mx4G38qebSCx9aFdr-SK6uqGrf4-C9GDy6eEJD-149K1ZLM23cbZc3hv8mOYvr" />
              <img className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="User 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkJbmA2dAOjXzh3h1z8hxodtHQqIloqP1ljtQGIvZFuP6sAdy7tfEEMFO4UcMNqINJzOXPHWxyT0YJ1IB2qSP-yXwrmPJbkd0WMzNnFhawWPJ4be6iyQer4lxeexwa2J5ilftt_vWBXIDbtiSBwBE-RgzQMiOG0rNIQ5_nmPWAjV4l3KKrZ4JlCfjCVJfNoTQmfKzAxBfszQJ0hlFs1hIcCXO60jFyc_bFvN46PrSmkdrhTXlMIxbsTf2LV3tqmCmQw0yJI47u3F68" />
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Joined by <span className="text-primary font-bold">12,000+</span> healthy explorers this month
            </p>
          </div>
        </div>
        <div className="relative lg:block hidden">
          <div className="relative z-10 float-animation">
            <img className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover" alt="Healthy meal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Md6gk1Wa-8c1Ez0nHhkDaWUy0gadpkh_4S9-xKnGdw3wNSgSDf0NCuMGbFew6HQe1QxBZ-l1G49Mkxa9m26DIeDE2HnKIMzerMcu40lk-3eTDAMNnC1WBnMhlWlC3dolAt4hpW8-IH1BNJvaf-ujVgT5IPp23UMMKAfbPIpalWgeDZW2IXz4IqdLXyOCa95dqBXN8y5pBjCuO4VT0MBda4APOR9ba_0SzI1U_l4XXgYuazPxCcbUrSOyWGQL-IAjYwL7IV3brZEw" />
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Daily Protein</p>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-primary">85%</span>
                <span className="text-xs text-on-surface-variant pb-1">of goal</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full mt-3 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-container h-full w-[85%] rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-secondary-container p-2 rounded-lg">
                <span className="material-symbols-outlined text-on-secondary-container">restaurant</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm font-bold">Next Meal</p>
                <p className="text-[10px] text-on-surface-variant">Quinoa Salad with Tofu</p>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-fixed-dim/20 blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
