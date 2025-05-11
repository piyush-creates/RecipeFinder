
interface RecipePageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch recipe');
    }

    const data = await res.json();
    
    if (!data.meals || data.meals.length === 0) {
      return (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <p>The recipe you're looking for doesn't exist.</p>
        </div>
      );
    }

    const recipe = data.meals[0];

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
        <img 
          src={recipe.strMealThumb} 
          alt={recipe.strMeal} 
          className="w-full max-w-md rounded mb-4" 
        />
        <p className="mb-4"><strong>Category:</strong> {recipe.strCategory}</p>
        <p className="mb-4"><strong>Area:</strong> {recipe.strArea}</p>
        <p className="mb-4">{recipe.strInstructions}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p>Something went wrong while fetching the recipe. Please try again later.</p>
      </div>
    );
  }
}
  