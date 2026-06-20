# 🎯 NutriPlan - Complete Feature Guide

## Pages & Routes

### 1️⃣ Home Page `/`
**Components:** Hero, HowItWorks, Features, MealCards, CTA

**Features:**
- Landing page with hero section
- "How It Works" tutorial section
- Feature showcase (Adaptive Meal Logic, Bio-Feedback, Smart Cart)
- Sample meal cards
- Call-to-action section

**Interactive Elements:**
- "Create My Diet Plan" button → Opens DietPlanModal
- "Get Started for Free" button → Opens DietPlanModal
- Smooth scroll animations

---

### 2️⃣ Recipes Page `/recipes`
**Components:** RecipeCard, HealthyTips, NutritionFacts

**Features:**
- Recipe grid with 6 recipes
- 5 filter categories: All, Weight Loss, High Protein, Vegan, Quick Meals
- Recipe cards with images and metadata
- Healthy tips section
- Nutrition facts insights

**Interactive Elements:**
- Category filters with active state styling
- Favorite toggle (heart icon) - persisted in component state
- Recipe cards with hover scale effect
- Grid/List view toggle (UI ready for implementation)
- Recipe cards show: cooking time, calories, description, ingredients

**Recipe Data:**
```javascript
{
  id: number,
  name: string,
  image: url,
  tag: string,
  tagColor: string,
  time: number (mins),
  calories: number,
  description: string,
  ingredients: [string]
}
```

---

### 3️⃣ Progress Page `/progress`
**Features:**
- **Stats Overview (4 cards):**
  - Calories Burned
  - Workouts This Week
  - Water Intake
  - Goal Progress

- **Weekly Progress Chart**
  - Bar chart showing daily progress
  - Randomly generated data (can be replaced with real data)

- **Macro Distribution**
  - Protein: 35%
  - Carbs: 45%
  - Fats: 20%
  - Visual progress bars

- **Recent Meals**
  - List of recent meals with calories
  - Timestamps for each meal

**Interactive Elements:**
- Hover effects on cards
- Color-coded macro bars
- Responsive grid layout

---

## 🔐 Global Features

### Navigation Component
**Desktop View:**
- Logo/Home link
- Navigation links (Dashboard, Recipes, Progress)
- Search bar (UI only - implementation ready)
- Get Started button

**Mobile View:**
- Bottom navigation bar
- 4 navigation icons
- Active state styling with filled icons

**Features:**
- Active link highlighting
- Scroll detection for nav styling
- Responsive breakpoint at 768px

---

### Diet Plan Modal
**State:**
- Manages diet plan generation
- User form inputs
- API loading state
- Generated diet plan display

**Form Fields:**
- Age (number)
- Weight (kg)
- Goal (dropdown)
- Activity Level (dropdown)
- Country (text)
- Diet Type (dropdown)

**Groq API Integration:**
- Generates personalized diet plans
- Uses llama-3.3-70b-versatile model
- Custom prompt with user parameters
- Error handling and loading states

**UX:**
- Modal with form and results views
- Editable form for new plans
- Results display with user summary

---

### Footer Component
- Logo and branding
- Copyright notice
- 4 footer links
- Responsive two-row layout on mobile

---

## 🎨 Design System

### Color Palette
```
Primary: #006c49 (Forest Green)
Primary Container: #10b981 (Emerald)
Secondary: #006591 (Ocean Blue)
Secondary Container: #39b8fd (Sky Blue)
Surface: #f7f9fb (Off White)
Surface Container: #eceef0
Surface Container Low: #f2f4f6
Surface Container High: #e6e8ea
Error: #ba1a1a (Red)
Text Primary: #191c1e (Near Black)
Text Secondary: #3c4a42 (Gray)
```

### Typography
- **Display Large**: 48px, 700 weight (Geist)
- **Headline Large**: 32px, 600 weight (Geist)
- **Headline Medium**: 24px, 600 weight (Geist)
- **Body Large**: 18px, 400 weight (Inter)
- **Body Medium**: 16px, 400 weight (Inter)
- **Label Medium**: 14px, 500 weight (Geist)
- **Label Small**: 12px, 600 weight (Geist)

### Spacing
- `stack-sm`: 8px
- `stack-md`: 16px
- `stack-lg`: 32px
- `margin-desktop`: 48px
- `margin-mobile`: 20px
- `gutter`: 24px

---

## 🔄 State Management

### App.jsx Global State
```javascript
{
  dietPlan: string,           // Generated plan content
  loading: boolean,           // API call state
  showDietModal: boolean,     // Modal visibility
  userFormData: {            // User inputs
    age: number,
    weight: number,
    goal: string,
    country: string,
    activityLevel: string,
    dietType: string
  }
}

// Functions
generateDietPlan(formData)   // Calls Groq API
closeDietModal()             // Closes modal
```

### RecipesPage Local State
```javascript
{
  activeFilter: string,      // Current filter
  favorites: Set<number>     // Favorite recipe IDs
}

// Functions
toggleFavorite(id)           // Add/remove favorite
```

---

## 🔗 Component Flow

### Data Props
```
App
├── Navigation (onOpenDietModal)
├── RecipesPage
│   ├── RecipeCard (recipe, isFavorite, onToggleFavorite)
│   ├── HealthyTips (no props)
│   └── NutritionFacts (no props)
├── ProgressPage (no props)
└── DietPlanModal (onClose, onGenerate, loading, dietPlan, userFormData)
```

---

## 🎯 Routing

### React Router Configuration
```javascript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/recipes" element={<RecipesPage />} />
    <Route path="/progress" element={<ProgressPage />} />
  </Routes>
</BrowserRouter>
```

### Navigation Links
- `<Link to="/">` → Home
- `<Link to="/recipes">` → Recipes
- `<Link to="/progress">` → Progress

### Active State Detection
```javascript
const location = useLocation();
const isActive = (path) => location.pathname === path;
```

---

## 🔌 API Integration

### Groq Integration
**Endpoint:** LLaMA 2 via Groq Cloud

**Model:** `llama-3.3-70b-versatile`

**Request:**
```javascript
groq.chat.completions.create({
  messages: [
    {
      role: "user",
      content: `Generate diet plan with: age, weight, goal, country, activity level, diet type`
    }
  ],
  model: "llama-3.3-70b-versatile"
})
```

**Response:** Formatted diet plan text with recommendations

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
  - Bottom navigation bar
  - Single column layouts
  - Full-width containers

- **Tablet**: 768px - 1024px
  - Desktop navigation shows
  - Two-column grids
  - Padding: `margin-mobile`

- **Desktop**: > 1024px
  - Full desktop navigation
  - Multi-column grids
  - Padding: `margin-desktop` (48px)

### Mobile Navigation
```
┌──────────────────┐
│   Content Area   │
├──────────────────┤
│ ⌂ 🍽️ 📊 ⚙️     │
```

---

## 🎨 Animation & Transitions

### Implemented
- Hover scale effects on cards (transform: scale(1.02))
- Image zoom on hover (group-hover:scale-110)
- Smooth color transitions
- Scroll-triggered nav styling
- Modal fade in/out
- Active link underline animation

### Available Tailwind Classes
- `transition-all`
- `duration-300`
- `duration-500`
- `hover:scale-*`
- `group-hover:*`

---

## 🔍 Performance

### Build Metrics
- JavaScript: 308.15 kB
- CSS: 1.93 kB
- Gzip: 97.78 kB
- Build time: 426ms

### Optimization
- Code splitting via React Router
- CSS minification
- JavaScript minification
- Image lazy loading ready
- Component-level code splitting

---

## 🚀 Deployment Ready

### Build Command
```bash
npm run build
```

### Output
- `dist/index.html` - Main HTML
- `dist/assets/index-*.js` - Bundled JavaScript
- `dist/assets/index-*.css` - Bundled CSS

### Hosting
- Ready for static hosting (Vercel, Netlify)
- Ready for server-side rendering frameworks
- No build-time environment variables needed

---

## 🔐 Security Considerations

### Current
- ✅ No sensitive data in code
- ✅ API key in environment variables
- ✅ Client-side Groq API (browser: true)

### Recommendations
- Use CORS proxy for production
- Implement backend API layer for Groq calls
- Add rate limiting
- Validate user inputs
- Add error boundaries

---

## 🧪 Testing Scenarios

### Navigation Testing
- [ ] Click all navigation links
- [ ] Verify active states
- [ ] Test mobile menu
- [ ] Check responsive breakpoints

### Recipe Page Testing
- [ ] Click each filter
- [ ] Toggle favorites
- [ ] Verify card rendering
- [ ] Check grid responsiveness

### Progress Page Testing
- [ ] Verify stat cards display
- [ ] Check chart rendering
- [ ] Verify macro bars
- [ ] Check recent meals list

### Modal Testing
- [ ] Open modal from all pages
- [ ] Fill form and generate plan
- [ ] Verify API call
- [ ] Close modal
- [ ] Regenerate plan

---

## 📚 Component Documentation

### RecipeCard Props
```javascript
{
  recipe: {
    id: number,
    name: string,
    image: url,
    tag: string,
    tagColor: string,
    time: number,
    calories: number,
    description: string,
    ingredients: [string]
  },
  isFavorite: boolean,
  onToggleFavorite: (id) => void
}
```

### Navigation Props
```javascript
{
  onOpenDietModal: () => void
}
```

### CTA Props
```javascript
{
  onGetStarted: () => void
}
```

---

## 🎓 Future Enhancements

### Features to Add
1. **Search Functionality**
   - Implement recipe search
   - Filter by ingredients

2. **User Accounts**
   - Login/signup
   - Save favorites
   - Personalized recommendations

3. **Shopping List**
   - Generate from recipes
   - Share with others
   - Check off items

4. **Nutrition Tracking**
   - Daily macros
   - Calorie counter
   - Progress charts

5. **Recipe Details**
   - Detailed instructions
   - Ingredient lists
   - Substitutions
   - Reviews

6. **Social Features**
   - Share recipes
   - Follow users
   - Collections

---

## 📞 Troubleshooting

### Issue: Routing not working
**Solution:** Ensure BrowserRouter wraps Routes in App.jsx

### Issue: Styles not applying
**Solution:** Check Tailwind config in index.html script tag

### Issue: API not responding
**Solution:** Check VITE_GROQ_API_KEY environment variable

### Issue: Icons not showing
**Solution:** Ensure Material Symbols font is loaded from CDN

---

Generated: 2024 | NutriPlan Feature Guide
