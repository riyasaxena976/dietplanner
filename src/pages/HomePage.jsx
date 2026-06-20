import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import MealCards from "../components/MealCards";
import CTA from "../components/CTA";

export default function HomePage({ onCreatePlan }) {
  return (
    <>
      <Hero onCreatePlan={onCreatePlan} />
      <HowItWorks />
      <Features />
      <MealCards />
      <CTA onGetStarted={onCreatePlan} />
    </>
  );
}
