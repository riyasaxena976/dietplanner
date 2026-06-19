import { useState } from "react";

export default function DietPlanModal({ onClose, onGenerate, loading, dietPlan, userFormData: initialFormData }) {
  const [formData, setFormData] = useState(initialFormData);
  const [showForm, setShowForm] = useState(!dietPlan);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
    setShowForm(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-primary text-on-primary p-8 flex justify-between items-center border-b border-primary-container/20">
          <div>
            <h2 className="font-headline-lg text-headline-lg">
              {showForm ? "Create Your Diet Plan" : "Your Personalized Diet Plan"}
            </h2>
            <p className="font-body-sm text-on-primary/80 mt-1">
              {showForm ? "Answer a few quick questions" : "Generated just for you"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl hover:bg-primary-container/20 p-2 rounded-full transition-colors"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {showForm ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Age */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Goal */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">Goal</label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Muscle Gain</option>
                    <option>Weight Loss</option>
                    <option>Maintenance</option>
                    <option>Endurance</option>
                    <option>Athletic Performance</option>
                  </select>
                </div>

                {/* Activity Level */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">Activity Level</label>
                  <select
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Sedentary</option>
                    <option>Light Exercise</option>
                    <option>Gym 3 days per week</option>
                    <option>Gym 5 days per week</option>
                    <option>Athletic/Professional</option>
                  </select>
                </div>

                {/* Country */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Diet Type */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">Diet Type</label>
                  <select
                    name="dietType"
                    value={formData.dietType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="omnivore">Omnivore</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="keto">Keto</option>
                    <option value="paleo">Paleo</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-on-primary font-headline-md text-headline-md px-6 py-4 rounded-xl hover:bg-primary-container transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⚙️</span>
                    Generating Your Plan...
                  </>
                ) : (
                  <>
                    Generate Diet Plan
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              {/* User Info Summary */}
              <div className="bg-primary-fixed/10 p-6 rounded-2xl border border-primary-fixed-dim/30">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-label-sm text-on-surface-variant">Age</p>
                    <p className="font-headline-md text-on-surface">{formData.age}</p>
                  </div>
                  <div>
                    <p className="font-label-sm text-on-surface-variant">Weight</p>
                    <p className="font-headline-md text-on-surface">{formData.weight} kg</p>
                  </div>
                  <div>
                    <p className="font-label-sm text-on-surface-variant">Goal</p>
                    <p className="font-headline-md text-on-surface">{formData.goal}</p>
                  </div>
                </div>
              </div>

              {/* Diet Plan Content */}
              {dietPlan && (
                <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
                  <pre className="font-body-md text-body-md text-on-surface whitespace-pre-wrap overflow-hidden">
                    {dietPlan}
                  </pre>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="flex-1 bg-surface-container-high text-on-surface font-headline-md text-body-md px-6 py-3 rounded-xl border border-outline-variant hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">refresh</span>
                  Generate New Plan
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-primary text-on-primary font-headline-md text-body-md px-6 py-3 rounded-xl hover:bg-primary-container transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">check</span>
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
