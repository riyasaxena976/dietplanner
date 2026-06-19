import { useState } from "react";
import Groq from "groq-sdk";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import MealCards from "./components/MealCards";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import DietPlanModal from "./components/DietPlanModal";

function App() {
  const [dietPlan, setDietPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDietModal, setShowDietModal] = useState(false);
  const [userFormData, setUserFormData] = useState({
    age: 20,
    weight: 69,
    goal: "Muscle Gain",
    country: "India",
    activityLevel: "Gym 5 days per week",
    dietType: "vegetarian",
  });

  const generateDietPlan = async (formData) => {
    setLoading(true);
    setShowDietModal(true);

    try {
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `
Generate a healthy ${formData.dietType} diet plan.

Details:
- Age: ${formData.age}
- Weight: ${formData.weight} kg
- Goal: ${formData.goal}
- Country: ${formData.country}
- Activity Level: ${formData.activityLevel}

Provide:
1. Daily calorie target
2. Macronutrients
3. Breakfast
4. Lunch
5. Evening Snack
6. Pre-Workout Meal
7. Post-Workout Meal
8. Dinner
9. Hydration Tips
10. Weekly meal prep tips
            `,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

      setDietPlan(
        chatCompletion.choices[0]?.message?.content ||
          "No response received."
      );
      setUserFormData(formData);
    } catch (error) {
      console.error(error);
      setDietPlan("Error generating diet plan. Please try again.");
    }

    setLoading(false);
  };

  const closeDietModal = () => {
    setShowDietModal(false);
    setDietPlan("");
  };

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <Navigation />
      <Hero onCreatePlan={() => setShowDietModal(true)} />
      <HowItWorks />
      <Features />
      <MealCards />
      <CTA onGetStarted={() => setShowDietModal(true)} />
      <Footer />
      
      {showDietModal && (
        <DietPlanModal
          onClose={closeDietModal}
          onGenerate={generateDietPlan}
          loading={loading}
          dietPlan={dietPlan}
          userFormData={userFormData}
        />
      )}
    </div>
  );
}

export default App;