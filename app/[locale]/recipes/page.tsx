import type { Metadata } from 'next';
import { recipesData } from '@/lib/data';
import { RecipeCard } from '@/components/RecipeCard';

export const metadata: Metadata = {
  title: 'All Recipes',
  description: 'Browse our complete collection of delicious and easy-to-make quesadilla recipes.',
};

export default function AllRecipesPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">All Our Delicious Recipes</h1>
          <p className="mt-4 text-lg text-gray-600">Find your next favorite meal right here.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipesData.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}