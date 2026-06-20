import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import HealthyTips from "../components/HealthyTips";
import NutritionFacts from "../components/NutritionFacts";

const RECIPE_DATA = [
  {
    id: 1,
    name: "Grilled Salmon Quinoa Bowl",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-TSMxIkNKO8GhVxPxoJkh1fcIwROrElcUBQjO4xG9BbrmjVz3YBQnEn2LJd7md1ofMxeocXHbIKb1JOmen9xrUdU2NKhAZF1-1PVHFH8FrTzTJ8Ki2eW2BnWtzhU8LjWTVYT-jHz5QQl435tYCu712vDExIJ7fpExmJk6lNDAnvhdW4wbD0tMkIaRAyaAqveiI88uJNeU0XQGiOQpH5aspXe71knOrfFZH1vLywJVbl765NkWd5D5hXvtCzjRR8Hs_rorBLpgFtbP",
    tag: "High Protein",
    tagColor: "bg-primary",
    time: 20,
    calories: 450,
    description: "Fresh Atlantic salmon paired with organic quinoa and a medley of seasonal roasted vegetables.",
    ingredients: ["Salmon", "Avocado", "Chickpeas"],
  },
  {
    id: 2,
    name: "Sesame Tofu Zen Bowl",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAly5xtY4fj0t84R0Bwal-2hjuzkS7Uuze5oANFtt1QqcWbg2nP1tDooJyL-xUGtWXVuYv8lYui36fpDzVSRK5xYDSVA-JMWvcCB9zyMoclj6VQUjB41xWmYTllVvmsCO8Qu6kFI_xcGHX3A-5YxCFdN_HFvSPRNujXJUJEQzUP1_0JjKFPI7XOsMx7Yiur05OPdRy4tDwm3XrzuXuw3aCBt8ZqpzMaIdJCVd2022Ooe56L1NFmM9qXwKiQ9IWN715zT9lZZac9Y2Io",
    tag: "Vegan",
    tagColor: "bg-secondary",
    time: 15,
    calories: 320,
    description: "A balanced blend of plant-based protein and slow-digesting carbs for sustained energy levels.",
    ingredients: ["Tofu", "Edamame", "Brown Rice"],
  },
  {
    id: 3,
    name: "Zesty Avocado Pesto Pasta",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd52qnqyq2x7kzPfzYeZKMkaT5I59go_d5ellPgxYpuH55c8KcJoe8xgE7w8yZJwVhPCvrRFVIYFy1rY9-OWrsK2S0XikRUTT3z4rA4c5OjViSwzYApGNU4hMCwLJVqZhpF0NIwe_Qxsmr8FAQtpERfqA5CYYV3tpf3DN5zuS7bxTCuV4pfMA68LjN0T1ZNTihPKEkSIdiHSsutUQK5Hos5nA5DTxry9Mz-5y5CilsU0-V0o49xSFmlucvQa9sLms4YLh9xqOFuHNX",
    tag: "Quick Meals",
    tagColor: "bg-primary",
    time: 12,
    calories: 510,
    description: "Creamy avocado sauce with whole grain penne, toasted pine nuts, and a hint of lemon zest.",
    ingredients: ["Whole Grain", "Avocado", "Basil"],
  },
  {
    id: 4,
    name: "Blueberry Protein Pancakes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1teLgPWnpguza9a14KSpgit2xVYSixNbJFIZeuY-jBbHrRLXFzzQ-EIo7j1uH0ZWx2D0aTDJ8YTgAV6Egxfgc9LpKlI1SqwNGIDIkiHaH5reD770VeXEq20c61ZpI2F8cf869py2rQyG_a90S0EBToMJkr49D2czxuCe0xh2v3ypT9cFbnS82TUBDkZ8JjZBehD7ZCrSnSCL0Lghutp62B_gBhoSStDSvM3GIWc0D-cz9UZvbGUnbJkLUA26R1uxytUGQuD3RTyNv",
    tag: "High Protein",
    tagColor: "bg-primary",
    time: 15,
    calories: 380,
    description: "Fluffy, low-carb pancakes packed with 30g of protein to fuel your morning workout routine.",
    ingredients: ["Whey Protein", "Blueberries", "Oats"],
  },
  {
    id: 5,
    name: "Roasted Tomato & Basil Bisque",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqTl2T6DE6Uo8d866Xpsm4sZF6taACXQbooBLO7N_k6qS7dBAJZ1p8LT9jIYY3VtL8O16w2X-DuciZQUlIQprnZuG4LaMy38Yp_a6covhWb8sgs8POKb0nuhip2Qnh13rW3TTauowAYFklJlJxMb-GfDSl_yXfpXxvbtspQ7Rvn5bLVeYkT9u4d78xkPMrI4JbQYlpFIT-C4K3dlbYxhV6B-wOm4S3T9IgdlbdDaUhQwPcfgQ6oQoAseIFN4E-k_IBYjgkAnNZsc-j",
    tag: "Weight Loss",
    tagColor: "bg-secondary",
    time: 25,
    calories: 180,
    description: "A low-calorie, nutrient-dense soup made with vine-ripened tomatoes and fresh garden herbs.",
    ingredients: ["Tomatoes", "Garlic", "Basil"],
  },
  {
    id: 6,
    name: "Kale & Chickpea Caesar",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDidbXRmdO0GUeMPyICI1rcDhtuYhh7JM0Or1CiqwoTY4A7Zv9Lijilr0Y15AOXWPcaL1Kmw9A54fpboUVvF71yCc189nlbaltkSRFDA3smkhAOGETsX69Gxt3wtjAmXZEWqfhAZiI_ASDrbguBEJLrSHvPl-wSFaP4O1FxC4ydTfQEzIXk35Tg44NU1iYTWXBabht9PlRA-mVAWT34ZG2RbS_iLcqavOTNfQRN9AKl-te8GjaDvB8O0v-6sb4l22R9aaSos08Bzp67",
    tag: "Vegan",
    tagColor: "bg-secondary",
    time: 10,
    calories: 260,
    description: "A plant-based twist on a classic favorite, featuring fiber-rich kale and crunchy protein crisps.",
    ingredients: ["Kale", "Chickpeas", "Cashew Dressing"],
  },
];

export default function RecipesPage() {
  const [activeFilter, setActiveFilter] = useState("All Recipes");
  const [favorites, setFavorites] = useState(new Set());

  const filters = ["All Recipes", "Weight Loss", "High Protein", "Vegan", "Quick Meals"];

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <main className="pt-28 pb-20 px-[20px] md:px-[48px] max-w-[1280px] mx-auto">
      {/* Hero Header */}
      <section className="mb-12">
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">Recipe Explorer</h1>
        <p className="text-on-surface-variant text-body-lg max-w-2xl">
          Discover AI-curated nutrition plans tailored to your biometric profile and health goals.
        </p>
      </section>

      {/* Filters Section */}
      <section className="mb-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 w-full md:w-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-primary-container text-on-primary-container"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-primary/10 border border-outline-variant/30"
              }`}
            >
              {filter !== "All Recipes" && (
                <span className="material-symbols-outlined text-[18px]">
                  {filter === "Weight Loss" ? "trending_down" : filter === "High Protein" ? "fitness_center" : filter === "Vegan" ? "eco" : "schedule"}
                </span>
              )}
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 bg-surface-container-lowest p-2 rounded-xl border border-outline-variant/20 shadow-sm">
          <button className="p-2 rounded-lg bg-surface-container-high text-primary">
            <span className="material-symbols-outlined">grid_view</span>
          </button>
          <button className="p-2 rounded-lg text-on-surface-variant/40">
            <span className="material-symbols-outlined">reorder</span>
          </button>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="recipe-grid mb-20">
        {RECIPE_DATA.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.has(recipe.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </section>

      {/* Insights Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[32px] border-t border-outline-variant/30 pt-20">
        <HealthyTips />
        <NutritionFacts />
      </section>
    </main>
  );
}
