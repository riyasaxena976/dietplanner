export default function MealCards() {
  const meals = [
    {
      name: "Atlantic Salmon & Asparagus",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-QL1awSS4t5UguVpuRPJIxoIGDs6QF8WbAfxdRKD4wKF765dIdCiw-_BVcoVXiUaj0ZmoJhVERbtsJiaRjroRP2ygS3fFex2jU46Er7VufjyOriOvlqmRiNNu6rf_ybNsPS0kn_20fiaeniqQbkAqZlGE7PPrjlwFkJVKz09cl8HHR5oqejuoY2JyKE_saIFaWs0XCmiy-4BxUAzlusBLuzXZv66m1T12SiXuDffWVlN7AwookO8oF5MID9z3OZ0yACA1LhF0zpgK",
      tag: "High Protein",
      tagColor: "text-primary",
      calories: 420,
      time: 15,
    },
    {
      name: "Berry Power Bowl",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO5G4-P3MnYiouPUSrYvsIvIraqGseKsne-b_zVfJUzV3vt2JmdmB0xjWDHLWowxxPnHzoKD3xcE3xG4lE5TXQTMKItuemuFuHWLPm1x5dEch1yvTO644nqtlmXc_vLa1OXIgucq6hOjr1a-rQrQCj8HT_sw71A7OyZX2lh82TTdbIrzUHnPzQ0LtGkHQTyEKvH4vHQT_XplKlb_VPTBDrHGuVmTq-SEjo0MG3FiqWksAzGQdRGZl4pqk8QO2Z3G5HFSLfYiNIIl1F",
      tag: "Antioxidant",
      tagColor: "text-secondary",
      calories: 310,
      time: 5,
    },
    {
      name: "Mediterranean Buddha Bowl",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0t86wxiRGBroGZH5h_0O8AUnnUKzON09Ha1tlcTfp7I0rFZBqS6YPpJz4HZvowzJFqo3OlS3FphKJR69Vi-dSZyCeiaF2wFGEKLZafUUcDR7R3YNnBRsaL21nTvUyiY9S2uS9-g9m1AS5xr9y5qHKODcEk3Mbl9R-pCOVReyS7lczL9CYiee0_fjlrVEHswE1oCnokNyot8mxwD6manK4P463Hd7dOjIeyWImGw-8FIOglA1pN_u8p-dpX7c6Ygan2kp9mKuXeSeK",
      tag: "Vegan Friendly",
      tagColor: "text-primary",
      calories: 380,
      time: 10,
    },
    {
      name: "Turkey Zoodles Pesto",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZX7zrvKTN3flu1gwbd4w2iE7stWwjHIojWccx6yW-U26nlbR4dwehbHGsl0FVZc7n8EsBDBwCUjoL5x7ZNo73ZA8Sz4Hh55_MOEJsgqCjxAZacXauR8GzIHl6c_Ke02u4TSoBaPj0-qKvacXRjZ_kjJyVvdDW-seJlamnE2rnimnKoe7qztkpXNemfaabKRI6oj947r0Z2ObHFrJ4Jse6t3GjD_j3V2W4TvVwR9y5DyDz6Vn_bW2l9m9Zc_vpkqM5M1G0IqeEkwJx",
      tag: "Low Carb",
      tagColor: "text-on-secondary-container",
      calories: 340,
      time: 20,
    },
  ];

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[48px]">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg">Chef-Curated, AI-Selected</h2>
          <p className="font-body-md text-on-surface-variant mt-2">
            Sample some of the high-protein, delicious options waiting for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {meals.map((meal, idx) => (
            <div key={idx} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={meal.name} 
                  src={meal.image} 
                />
                <div className={`absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold ${meal.tagColor}`}>
                  {meal.tag}
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-headline-md text-body-md font-bold mb-2">{meal.name}</h4>
                <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">local_fire_department</span> 
                    {meal.calories} kcal
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">timer</span> 
                    {meal.time} min
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
