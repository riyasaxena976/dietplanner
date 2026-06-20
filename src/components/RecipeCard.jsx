export default function RecipeCard({ recipe, isFavorite, onToggleFavorite }) {
  return (
    <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative h-60 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={recipe.name}
          src={recipe.image}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`${recipe.tagColor} text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase`}>
            {recipe.tag}
          </span>
        </div>
        <button
          onClick={() => onToggleFavorite(recipe.id)}
          className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/50 transition-colors"
          style={{
            fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0",
          }}
        >
          <span className={`material-symbols-outlined ${isFavorite ? "text-error" : ""}`}>
            favorite
          </span>
        </button>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 text-on-surface-variant mb-3">
          <span className="flex items-center gap-1 font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            {recipe.time} mins
          </span>
          <span className="flex items-center gap-1 font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            {recipe.calories} kcal
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{recipe.name}</h3>
        <p className="text-on-surface-variant font-body-md mb-4 line-clamp-2">{recipe.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {recipe.ingredients.map((ingredient) => (
            <span
              key={ingredient}
              className="px-2 py-1 bg-surface-container text-on-surface-variant rounded-md text-label-sm font-label-sm"
            >
              {ingredient}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
