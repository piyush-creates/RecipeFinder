import RecipeCard from "@/components/RecipeCard";

export default async function SearchPage({searchParams}: {searchParams: {q : string}}) {
    const query = searchParams.q;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    //console.log(data)
    const recipes =  data.meals;

    if(!recipes){
        return(
            <h1>No recipe Found for "{query}"</h1>
        )
    }

    return (
        <div>
            Result for "{query}"
            <div>
                {recipes.map((recipe: any) =>
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                )}
            </div>
        </div>
    )
}