export default function ProgressPage() {
  return (
    <main className="pt-28 pb-20 px-[20px] md:px-[48px] max-w-[1280px] mx-auto">
      <section className="mb-12">
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">Progress Tracking</h1>
        <p className="text-on-surface-variant text-body-lg max-w-2xl">
          Monitor your health journey with detailed insights and analytics.
        </p>
      </section>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Calories Burned", value: "2,450", icon: "local_fire_department" },
          { label: "Workouts This Week", value: "5", icon: "fitness_center" },
          { label: "Water Intake", value: "2.1L", icon: "water_drop" },
          { label: "Goal Progress", value: "78%", icon: "trending_up" },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-on-surface-variant font-label-md text-label-md">{stat.label}</span>
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
            </div>
            <p className="font-display-lg text-headline-lg text-on-surface">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/20">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Weekly Progress</h3>
          <div className="space-y-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} className="flex items-center gap-4">
                <span className="w-20 font-label-md text-label-md text-on-surface-variant">{day}</span>
                <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full"
                    style={{ width: `${Math.random() * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/20">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Macro Distribution</h3>
          <div className="space-y-4">
            {[
              { label: "Protein", value: 35, color: "bg-primary" },
              { label: "Carbs", value: 45, color: "bg-secondary" },
              { label: "Fats", value: 20, color: "bg-primary-container" },
            ].map((macro) => (
              <div key={macro.label}>
                <div className="flex justify-between mb-2">
                  <span className="font-label-md text-label-md text-on-surface">{macro.label}</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">{macro.value}%</span>
                </div>
                <div className="h-3 bg-surface-container rounded-full overflow-hidden">
                  <div className={`h-full ${macro.color} rounded-full`} style={{ width: `${macro.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Meals */}
      <section className="mt-12">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Recent Meals</h2>
        <div className="space-y-3">
          {[
            { meal: "Grilled Salmon & Quinoa", cal: 450, time: "12:30 PM" },
            { meal: "Greek Salad with Chickpeas", cal: 320, time: "7:45 PM" },
            { meal: "Protein Smoothie", cal: 280, time: "6:00 AM" },
          ].map((item) => (
            <div key={item.meal} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 flex justify-between items-center">
              <div>
                <p className="font-label-md text-label-md text-on-surface font-bold">{item.meal}</p>
                <p className="text-on-surface-variant text-label-sm">{item.time}</p>
              </div>
              <span className="font-headline-md text-headline-md text-primary">{item.cal} cal</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
