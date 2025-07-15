import type { Recipe } from '@/lib/data';

export const RecipeSchema = ({ recipe }: { recipe: Recipe }) => {
  const schema = {
    "@context": "https://quesadillacorner.site/",
    "@type": "Recipe",
    "name": recipe.title,
    "image": [recipe.imageUrl],
    "author": {
      "@type": "Organization",
      "name": "Quesadilla Corner"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "description": recipe.description,
    "prepTime": `PT${recipe.prepTime}M`,
    "cookTime": `PT${recipe.cookTime}M`,
    "totalTime": `PT${recipe.prepTime + recipe.cookTime}M`,
    "keywords": `quesadilla, recipe, ${recipe.tags.join(', ')}`,
    "recipeYield": `${recipe.servings} servings`,
    "recipeCategory": recipe.tags.join(', '),
    "recipeCuisine": "Mexican",
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.instructions.map((step, index) => ({
      "@type": "HowToStep",
      "name": `Step ${index + 1}`,
      "text": step
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};