import Link from "next/link";

export default function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <Link href={`/recipes/${recipe.idMeal}`}>
      <div className="border p-4 rounded hover:shadow transition">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded mb-2" />
        <h3 className="text-lg font-bold">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-600">{recipe.strArea} • {recipe.strCategory}</p>
      </div>
    </Link>
  );
}
